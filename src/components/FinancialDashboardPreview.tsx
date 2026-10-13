'use client';

import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';
import {
  Activity,
  Layers,
  Database,
  TrendingUp,
  Clock,
  Server,
  Zap,
  CheckCircle2,
  RefreshCw,
  BarChart3,
  PieChart as PieIcon,
  LineChart as LineIcon,
  Sparkles
} from 'lucide-react';

// Monthly multi-stream telemetry
const trafficStreamData = [
  { month: 'Jan', organic: 4200, paid: 2800, referral: 1900 },
  { month: 'Feb', organic: 4600, paid: 3100, referral: 2100 },
  { month: 'Mar', organic: 5100, paid: 3400, referral: 2300 },
  { month: 'Apr', organic: 5800, paid: 3900, referral: 2700 },
  { month: 'May', organic: 6400, paid: 4200, referral: 3100 },
  { month: 'Jun', organic: 7100, paid: 4700, referral: 3400 },
  { month: 'Jul', organic: 7900, paid: 5200, referral: 3800 },
  { month: 'Aug', organic: 8600, paid: 5600, referral: 4100 },
  { month: 'Sep', organic: 9200, paid: 5900, referral: 4500 },
  { month: 'Oct', organic: 9800, paid: 6300, referral: 4900 },
  { month: 'Nov', organic: 10600, paid: 6800, referral: 5300 },
  { month: 'Dec', organic: 11400, paid: 7300, referral: 5800 },
];

// Multi-color Cohort Retention by Channel
const cohortChannelData = [
  { stage: 'Day 1', organic: 88, paidSocial: 72, email: 82, referral: 91 },
  { stage: 'Day 7', organic: 64, paidSocial: 45, email: 58, referral: 72 },
  { stage: 'Day 30', organic: 48, paidSocial: 28, email: 42, referral: 56 },
  { stage: 'Day 60', organic: 38, paidSocial: 21, email: 34, referral: 47 },
  { stage: 'Day 90', organic: 32, paidSocial: 16, email: 29, referral: 41 },
  { stage: 'Day 180', organic: 27, paidSocial: 12, email: 24, referral: 36 },
];

// Enterprise Data Stack Distribution
const dataSourceBreakdown = [
  { name: 'PostgreSQL Core DB', value: 38, color: '#0c66e4' },
  { name: 'BigQuery Analytics Lake', value: 26, color: '#0ea5e9' },
  { name: 'Kafka Realtime Stream', value: 18, color: '#8b5cf6' },
  { name: 'Google Analytics 4', value: 12, color: '#10b981' },
  { name: 'REST CRM Ingestion', value: 6, color: '#f59e0b' },
];

// Machine Learning ARIMA Forecast Line Chart
const predictiveLineData = [
  { month: 'M1', actual: 120, forecast: 118, upperBand: 126, lowerBand: 110 },
  { month: 'M2', actual: 128, forecast: 125, upperBand: 134, lowerBand: 116 },
  { month: 'M3', actual: 135, forecast: 132, upperBand: 142, lowerBand: 122 },
  { month: 'M4', actual: 144, forecast: 140, upperBand: 151, lowerBand: 129 },
  { month: 'M5', actual: 152, forecast: 149, upperBand: 160, lowerBand: 138 },
  { month: 'M6', actual: 161, forecast: 158, upperBand: 170, lowerBand: 146 },
  { month: 'M7', actual: 170, forecast: 168, upperBand: 181, lowerBand: 155 },
  { month: 'M8', actual: null, forecast: 179, upperBand: 193, lowerBand: 165 },
  { month: 'M9', actual: null, forecast: 189, upperBand: 205, lowerBand: 173 },
  { month: 'M10', actual: null, forecast: 201, upperBand: 219, lowerBand: 183 },
];

export default function FinancialDashboardPreview() {
  const [activeTab, setActiveTab] = useState<'traffic' | 'cohort' | 'sources' | 'predictive'>('traffic');
  const [timeRange, setTimeRange] = useState<'30D' | '90D' | '1Y'>('1Y');

  return (
    <div className="w-full bg-white border border-slate-100 rounded-[2.5rem] p-6 sm:p-10 shadow-sm hover:shadow-md transition-all">
      {/* Top Solarn Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-slate-100">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-blue-600 border border-blue-100">
              <span className="size-2 rounded-full bg-blue-600 animate-pulse" />
              SOLARN: DA-COCKPIT-01
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-emerald-50 text-emerald-700 border border-emerald-100">
              <CheckCircle2 className="size-3.5" />
              STATUS: LIVE PRODUCTION
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Interactive Business Intelligence & Growth Cockpit
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Dynamic telemetry: Multi-channel event streaming, cohort retention decay, data architecture mix, and predictive ARIMA modeling.
          </p>
        </div>

        {/* Time range + Controls */}
        <div className="flex flex-wrap items-center gap-3 self-start lg:self-center">
          <div className="flex items-center p-1.5 bg-slate-100 rounded-2xl border border-slate-200/60 text-xs font-black">
            {(['30D', '90D', '1Y'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-1.5 rounded-xl transition-all ${
                  timeRange === range
                    ? 'bg-white text-blue-600 shadow-sm font-black'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-slate-100 border border-slate-200/60 text-xs font-mono font-bold text-slate-500">
            <RefreshCw className="size-3.5 text-blue-600 animate-spin" />
            <span>Synced 2s ago</span>
          </div>
        </div>
      </div>

      {/* Solarn Tab Switcher (Rounded 2xl Pills) */}
      <div className="flex items-center gap-2 overflow-x-auto py-4 mb-4 border-b border-slate-100">
        <button
          onClick={() => setActiveTab('traffic')}
          className={`flex items-center gap-2 px-5 py-2.5 text-xs font-black rounded-2xl transition-all shrink-0 ${
            activeTab === 'traffic'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
              : 'bg-slate-100 text-slate-600 hover:text-blue-600 hover:bg-blue-50'
          }`}
        >
          <Activity className="size-4" />
          <span>1. Traffic Ingestion Stream (Area Chart)</span>
        </button>

        <button
          onClick={() => setActiveTab('cohort')}
          className={`flex items-center gap-2 px-5 py-2.5 text-xs font-black rounded-2xl transition-all shrink-0 ${
            activeTab === 'cohort'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
              : 'bg-slate-100 text-slate-600 hover:text-blue-600 hover:bg-blue-50'
          }`}
        >
          <BarChart3 className="size-4" />
          <span>2. Cohort Retention Decay (Multi-Bar Chart)</span>
        </button>

        <button
          onClick={() => setActiveTab('sources')}
          className={`flex items-center gap-2 px-5 py-2.5 text-xs font-black rounded-2xl transition-all shrink-0 ${
            activeTab === 'sources'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
              : 'bg-slate-100 text-slate-600 hover:text-blue-600 hover:bg-blue-50'
          }`}
        >
          <PieIcon className="size-4" />
          <span>3. Data Stack Mix (Donut Chart)</span>
        </button>

        <button
          onClick={() => setActiveTab('predictive')}
          className={`flex items-center gap-2 px-5 py-2.5 text-xs font-black rounded-2xl transition-all shrink-0 ${
            activeTab === 'predictive'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
              : 'bg-slate-100 text-slate-600 hover:text-blue-600 hover:bg-blue-50'
          }`}
        >
          <LineIcon className="size-4" />
          <span>4. Predictive ARIMA Forecast (Line Chart)</span>
        </button>
      </div>

      {/* Chart Canvas Area */}
      <div className="bg-slate-50/70 border border-slate-100 rounded-[2rem] p-6 sm:p-8">
        {/* Tab 1: Traffic Stream Area Chart */}
        {activeTab === 'traffic' && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <p className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  Monthly Multi-Channel Ingestion & Organic Discovery (Events / Month)
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  High-velocity pipeline telemetry contrasting organic traffic against paid social & direct channels.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-black">
                <span className="flex items-center gap-1.5 text-blue-600">
                  <span className="size-3 rounded-full bg-blue-600" /> Organic Search
                </span>
                <span className="flex items-center gap-1.5 text-purple-600">
                  <span className="size-3 rounded-full bg-purple-600" /> Paid Campaigns
                </span>
                <span className="flex items-center gap-1.5 text-sky-500">
                  <span className="size-3 rounded-full bg-sky-500" /> Referral & Direct
                </span>
              </div>
            </div>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficStreamData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="solarnOrganicGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0c66e4" stopOpacity={0.6} />
                      <stop offset="95%" stopColor="#0c66e4" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="solarnPaidGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.5} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="solarnReferralGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.5} />
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} fontWeight={700} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} fontWeight={700} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '16px', fontSize: '13px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                    labelStyle={{ color: '#0f172a', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="organic" name="Organic Search" stroke="#0c66e4" strokeWidth={3} fillOpacity={1} fill="url(#solarnOrganicGrad)" />
                  <Area type="monotone" dataKey="paid" name="Paid Campaigns" stroke="#8b5cf6" strokeWidth={2.5} fillOpacity={1} fill="url(#solarnPaidGrad)" />
                  <Area type="monotone" dataKey="referral" name="Direct / Referral" stroke="#0ea5e9" strokeWidth={2} fillOpacity={1} fill="url(#solarnReferralGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Tab 2: Cohort Multi-Color Bar Chart */}
        {activeTab === 'cohort' && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <p className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  Cohort Retention Rate Decay Across Acquisition Channels (%)
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Highlighting sustained long-term customer value from Referral and Organic discovery vs Paid Social drop-off.
                </p>
              </div>
            </div>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cohortChannelData} margin={{ top: 10, right: 10, left: -10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="stage" stroke="#94a3b8" fontSize={12} tickLine={false} fontWeight={700} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} fontWeight={700} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '16px', fontSize: '13px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                    formatter={(val) => [`${val}%`, 'Retention']}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px', fontWeight: 'bold', paddingTop: '10px' }} />
                  <Bar dataKey="referral" name="Referral & Direct" fill="#0c66e4" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="organic" name="Organic SEO" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="email" name="Email Nurturing" fill="#10b981" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="paidSocial" name="Paid Social Ads" fill="#f43f5e" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Tab 3: Data Architecture Mix Donut Chart */}
        {activeTab === 'sources' && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <p className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  Enterprise Data Stack Volume Distribution (%)
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Breakdown across transactional relational databases, analytical warehouse lakes, and real-time Kafka streams.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={dataSourceBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={105}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {dataSourceBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '16px', fontSize: '13px' }}
                      formatter={(val) => [`${val}%`, 'Volume Share']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="md:col-span-6 space-y-3">
                {dataSourceBreakdown.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-100 shadow-xs">
                    <div className="flex items-center gap-3">
                      <span className="size-3.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-xs font-black text-slate-800">{item.name}</span>
                    </div>
                    <span className="text-xs font-mono font-black" style={{ color: item.color }}>
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Predictive Forecast Line Chart */}
        {activeTab === 'predictive' && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <p className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  Metric Trajectory: Historical Realized vs ML ARIMA Predictive Forecast
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Statistical 95% upper and lower confidence bounds modeling projected quarterly revenue index.
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-black">
                <span className="flex items-center gap-1.5 text-blue-600">
                  <span className="w-4 h-1 bg-blue-600 rounded-full" /> Actual Realized
                </span>
                <span className="flex items-center gap-1.5 text-purple-600">
                  <span className="w-4 h-1 bg-purple-600 rounded-full border-dashed" /> Forecast
                </span>
              </div>
            </div>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={predictiveLineData} margin={{ top: 10, right: 10, left: -10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} fontWeight={700} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} fontWeight={700} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '16px', fontSize: '13px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px', fontWeight: 'bold', paddingTop: '10px' }} />
                  <Line type="monotone" dataKey="actual" name="Actual Realized" stroke="#0c66e4" strokeWidth={3.5} dot={{ r: 5, fill: '#0c66e4' }} />
                  <Line type="monotone" dataKey="forecast" name="Forecast Model" stroke="#8b5cf6" strokeWidth={3} strokeDasharray="5 5" dot={{ r: 4, fill: '#8b5cf6' }} />
                  <Line type="monotone" dataKey="upperBand" name="Upper 95% CI" stroke="#10b981" strokeWidth={1.5} strokeDasharray="2 2" dot={false} />
                  <Line type="monotone" dataKey="lowerBand" name="Lower 95% CI" stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="2 2" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>

      {/* Solarn Telemetry Bottom Bar */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
        <div className="flex items-center gap-2 font-medium">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Execution Engine: PostgreSQL • Power BI VertiPaq • Python statsmodels • Recharts</span>
        </div>
        <div className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-xl border border-blue-100">
          DAX & SQL Cache Execution: 38ms (Optimized)
        </div>
      </div>
    </div>
  );
}
