"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  BookOpen, 
  Clock,
  Filter,
  SortAsc,
  MoreHorizontal
} from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

// Datos de ejemplo para las métricas
const metrics = [
  {
    title: "Vistas de Página",
    value: "12,450",
    change: "+15.8%",
    trend: "up",
    icon: TrendingUp
  },
  {
    title: "Ingresos Totales",
    value: "$363.95",
    change: "-34.0%",
    trend: "down",
    icon: TrendingDown
  },
  {
    title: "Tasa de Rebote",
    value: "86.5%",
    change: "+24.2%",
    trend: "up",
    icon: TrendingUp
  },
  {
    title: "Total Suscriptores",
    value: "24,473",
    change: "+8.3%",
    trend: "up",
    icon: Users,
    subtitle: "+749 aumentados"
  }
]

// Datos para el gráfico de ventas
const salesData = [
  { month: "Oct", total: 2988.20, china: 1200, ue: 800, usa: 600, canada: 200, other: 188.20 },
  { month: "Nov", total: 1765.09, china: 800, ue: 500, usa: 300, canada: 100, other: 65.09 },
  { month: "Dec", total: 4005.65, china: 2000, ue: 1200, usa: 600, canada: 150, other: 55.65 }
]

// Datos para el gráfico de suscriptores
const subscribersData = [
  { day: "Dom", value: 2100 },
  { day: "Lun", value: 3200 },
  { day: "Mar", value: 3874 },
  { day: "Mié", value: 2800 },
  { day: "Jue", value: 3500 },
  { day: "Vie", value: 4200 },
  { day: "Sáb", value: 3800 }
]

// Datos para el gráfico de distribución de ventas
const salesDistribution = [
  { name: "Sitio Web", value: 374.82, color: "#8B5CF6" },
  { name: "App Móvil", value: 241.60, color: "#06B6D4" },
  { name: "Otros", value: 213.42, color: "#10B981" }
]

// Datos para la tabla de integraciones
const integrations = [
  { name: "Stripe", type: "Finanzas", rate: 40, profit: 650.00 },
  { name: "Zapier", type: "CRM", rate: 80, profit: 720.50 },
  { name: "Shopify", type: "Marketplace", rate: 20, profit: 432.25 }
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Bienvenido a AtodoBit Academy
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtro
          </Button>
          <Button variant="outline" size="sm">
            <SortAsc className="h-4 w-4 mr-2" />
            Ordenar
          </Button>
          <Button variant="outline" size="sm">
            Exportar
          </Button>
        </div>
      </div>

      {/* Métricas principales */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span className={`flex items-center ${
                  metric.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {metric.change}
                </span>
                {metric.subtitle && (
                  <span className="text-green-600">{metric.subtitle}</span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Gráfico de ventas */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Resumen de Ventas</CardTitle>
              <CardDescription>
                Total: $9,257.51
                <span className="text-green-600 ml-2">+15.8% +$143.50 aumentado</span>
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtro
              </Button>
              <Button variant="outline" size="sm">
                <SortAsc className="h-4 w-4 mr-2" />
                Ordenar
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="china" stackId="a" fill="#8B5CF6" />
                <Bar dataKey="ue" stackId="a" fill="#A855F7" />
                <Bar dataKey="usa" stackId="a" fill="#3B82F6" />
                <Bar dataKey="canada" stackId="a" fill="#06B6D4" />
                <Bar dataKey="other" stackId="a" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-600 rounded"></div>
              <span className="text-sm">China</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded"></div>
              <span className="text-sm">UE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-sm">USA</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-500 rounded"></div>
              <span className="text-sm">Canadá</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-sm">Otros</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Gráfico de suscriptores */}
        <Card>
          <CardHeader>
            <CardTitle>Total Suscriptores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subscribersData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Distribución de ventas */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Distribución de Ventas</CardTitle>
              <Button variant="outline" size="sm">
                Mensual
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={salesDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {salesDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {salesDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">${item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de integraciones */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Lista de Integraciones</CardTitle>
            <Button variant="link" size="sm">
              Ver Todo
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {integrations.map((integration, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <input type="checkbox" className="rounded" />
                  <div>
                    <div className="font-medium">{integration.name}</div>
                    <div className="text-sm text-muted-foreground">{integration.type}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm font-medium">{integration.rate}%</div>
                    <Progress value={integration.rate} className="w-20 h-2" />
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${integration.profit}</div>
                    <div className="text-sm text-muted-foreground">Beneficio</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

