"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminLoginSchema, type AdminLoginData } from "@/lib/validations";
import type { Lead } from "@/types";
import { Button } from "@/components/ui/Button";
import {
  Search,
  Download,
  LogOut,
  Users,
  Mail,
  Building2,
  Calendar,
  Shield,
  TrendingUp,
} from "lucide-react";

const ADMIN_CREDENTIALS = { username: "admin", password: "accredian" };

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const { register, handleSubmit, formState: { errors }, setError } = useForm<AdminLoginData>({
    resolver: zodResolver(adminLoginSchema),
  });

  const onSubmit = (data: AdminLoginData) => {
    if (data.username === ADMIN_CREDENTIALS.username && data.password === ADMIN_CREDENTIALS.password) {
      onLogin();
    } else {
      setError("password", { message: "Invalid username or password" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 items-center justify-center text-white font-bold text-xl mb-4 shadow-glow-brand">
            A
          </div>
          <h1 className="text-2xl font-display font-bold text-white">Admin Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to manage leads</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/4 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-5"
        >
          <div>
            <label htmlFor="admin-username" className="block text-sm font-medium text-gray-300 mb-1.5">
              Username
            </label>
            <input
              id="admin-username"
              {...register("username")}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all"
              placeholder="admin"
              autoComplete="username"
            />
            {errors.username && <p className="text-xs text-red-400 mt-1">{errors.username.message}</p>}
          </div>
          <div>
            <label htmlFor="admin-password" className="block text-sm font-medium text-gray-300 mb-1.5">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              {...register("password")}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all"
              placeholder="••••••••"
              autoComplete="current-password"
            />
            {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>}
          </div>
          <Button type="submit" variant="primary" size="lg" className="w-full">
            <Shield className="w-4 h-4" /> Sign In
          </Button>
          <p className="text-center text-xs text-gray-600">
            Hint: admin / accredian
          </p>
        </form>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success) setLeads(data.leads);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authed) fetchLeads();
  }, [authed, fetchLeads]);

  const filtered = leads.filter(
    (l) =>
      l.fullName.toLowerCase().includes(search.toLowerCase()) ||
      l.workEmail.toLowerCase().includes(search.toLowerCase()) ||
      l.companyName.toLowerCase().includes(search.toLowerCase())
  );

  const exportCSV = () => {
    const headers = ["Name", "Email", "Company", "Phone", "Team Size", "Message", "Date"];
    const rows = filtered.map((l) => [
      l.fullName, l.workEmail, l.companyName, l.phone, l.teamSize, l.message ?? "",
      new Date(l.createdAt).toLocaleDateString("en-IN"),
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!authed) return <LoginForm onLogin={() => setAuthed(true)} />;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/8 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <span className="font-display font-bold text-lg text-white">
              Admin Dashboard
            </span>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="sm" onClick={() => router.push("/")} aria-label="Go to home">
              ← Home
            </Button>
            <Button variant="danger" size="sm" onClick={() => setAuthed(false)} aria-label="Logout">
              <LogOut className="w-3.5 h-3.5" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Leads", value: leads.length, Icon: Users, color: "text-brand-400" },
            { label: "This Week", value: leads.filter(l => new Date(l.createdAt) > new Date(Date.now() - 7 * 86400000)).length, Icon: TrendingUp, color: "text-green-400" },
            { label: "Companies", value: new Set(leads.map(l => l.companyName)).size, Icon: Building2, color: "text-accent-400" },
            { label: "Emails", value: leads.length, Icon: Mail, color: "text-yellow-400" },
          ].map(({ label, value, Icon, color }) => (
            <div key={label} className="bg-white/3 border border-white/8 rounded-2xl p-5">
              <Icon className={`w-5 h-5 ${color} mb-2`} />
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-gray-500 text-xs">{label}</div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search by name, email or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all"
              aria-label="Search leads"
            />
          </div>
          <Button variant="outline" size="md" onClick={exportCSV} aria-label="Export CSV">
            <Download className="w-4 h-4" /> Export CSV
          </Button>
          <Button variant="secondary" size="md" onClick={fetchLeads} aria-label="Refresh leads">
            Refresh
          </Button>
        </div>

        {/* Table */}
        <div className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm" aria-label="Leads table">
              <thead>
                <tr className="border-b border-white/8 bg-white/3">
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-3.5">Name</th>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-3.5">Email</th>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-3.5 hidden md:table-cell">Company</th>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-3.5 hidden lg:table-cell">Team Size</th>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-3.5 hidden sm:table-cell">Date</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="text-center text-gray-500 py-16">
                      <div className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin text-brand-400" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Loading leads...
                      </div>
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center text-gray-500 py-16">
                      {leads.length === 0 ? "No leads yet. Submit the form on the landing page!" : "No leads match your search."}
                    </td>
                  </tr>
                ) : (
                  filtered.map((lead, idx) => (
                    <tr
                      key={lead.id}
                      className={`border-b border-white/5 hover:bg-white/3 transition-colors ${idx % 2 === 0 ? "" : "bg-white/1"}`}
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-xs font-bold shrink-0">
                            {lead.fullName.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <p className="text-white font-medium">{lead.fullName}</p>
                            <p className="text-gray-500 text-xs md:hidden">{lead.workEmail}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-gray-300 hidden sm:table-cell">{lead.workEmail}</td>
                      <td className="px-5 py-4 text-gray-300 hidden md:table-cell">{lead.companyName}</td>
                      <td className="px-5 py-4 hidden lg:table-cell">
                        <span className="px-2.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium">
                          {lead.teamSize}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-gray-400 hidden sm:table-cell">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                            day: "2-digit", month: "short", year: "numeric",
                          })}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {filtered.length > 0 && (
            <div className="px-5 py-3 border-t border-white/5 text-xs text-gray-500">
              Showing {filtered.length} of {leads.length} leads
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
