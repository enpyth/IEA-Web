# 系统架构设计文档

## 一、项目概述

本系统是一个典型的前后端分离 Web 应用，前端使用 Next.js 构建并部署在 Vercel，后端采用 ASP.NET Core Web API，部署在 Azure App Service。系统支持调用外部 AI 模型接口、集成 Xero 财务系统，并使用 Azure PostgreSQL 进行数据持久化。该系统面向企业客户，支持用户管理、数据交互与审计追踪等关键功能。

---

## 二、系统总体架构

![arch](./imgs/IEA_ArchDesign.svg)

---

## 三、架构组件说明

### 1. Next.js 前端（部署在 Vercel）

* 用户界面与交互处理
* 支持 SSR 与静态页面生成
* 使用 fetch 调用后端 API
* 安全性设计：不处理敏感数据，所有动态数据由后端提供

### 2. ASP.NET Core 后端（部署在 Azure）

* 提供 RESTful API
* 封装业务逻辑与服务调用（如 Xero、AI 模型）
* 实现用户认证、授权（JWT）与 RBAC 权限模型
* 使用 Entity Framework Core 操作 PostgreSQL

### 3. Azure PostgreSQL 数据库

* 用于持久化业务数据、用户信息、审计日志等
* 开启慢查询日志与资源告警

### 4. 外部服务集成

* **Xero API**：财务系统对接，OAuth2 登录，Webhook 支持
* **AI 模型 API**：如 OpenAI，用于模型调用、推理处理

---

## 四、安全架构设计

| 安全点       | 设计说明                                                                  |
| --------- | --------------------------------------------------------------------- |
| 认证机制      | JWT Token + OAuth2 登录                                                 |
| 前端通信      | fetch 请求附带 Bearer Token，启用 HTTPS                                      |
| CORS 策略   | 后端限制允许域名（如 [https://iea-web.vercel.app）](https://iea-web.vercel.app）) |
| API 防护    | 速率限制、Token 校验、日志审计                                                    |
| Secret 管理 | 敏感配置（Xero 密钥等）使用 Azure Key Vault 存储                                   |

---

## 五、可观测性体系设计

### 1. 前端可观测性（Vercel）

* Vercel Analytics（Pro）监控 Web Vitals
* Sentry 捕获 JS 错误、API 调用异常
* 可选集成 LogRocket 分析用户行为轨迹

### 2. 后端可观测性（Azure）

* Azure Application Insights：自动捕捉请求、异常、依赖调用
* 日志记录统一使用 ILogger 与 TelemetryClient
* Application Map 追踪服务依赖链路

### 3. 数据库可观测性（Azure PostgreSQL）

* 使用 Azure Monitor 指标查看连接数、CPU 使用、IO 等
* 开启 Diagnostic Settings 输出到 Log Analytics
* 使用 Query Performance Insight 分析慢查询

### 4. 外部 API 调用监控

* 后端统一封装调用模块（XeroService、AIService）
* Application Insights 自动记录 HttpClient 调用依赖
* 使用 Polly 做重试与限流策略

### 5. 链路追踪设计

* 前端为每次请求生成 X-Request-ID
* 后端中间件解析该 ID，记录在日志与 App Insights Trace 中

---

## 六、CI/CD 设计

| 组件  | 工具                     | 描述                        |
| --- | ---------------------- | ------------------------- |
| 前端  | Vercel                 | 自动部署，支持 preview 环境        |
| 后端  | GitHub Actions + Azure | 自动构建发布到 Azure App Service |
| 数据库 | EF Core Migration      | 控制版本，手动或流水线执行迁移           |

---

## 七、拓展与演进建议

* 后端服务可进一步拆分为多个微服务（user, xero, ai 等）
* 引入 API Gateway 统一流量入口与认证机制
* 接入 OpenTelemetry 进行前后端链路统一追踪
* 配置 Azure Alert + Logic Apps 实现自动报警与响应

---

## 附录

### 1. 域名与路由规范

* 前端：`https://www.ieally.com`
* 后端：`https://api.ieally.com`

### 2. 日志与监控接入点

* 前端：`Sentry.io` + `Vercel Analytics`
* 后端：`Application Insights`
* 数据库：`Azure Monitor` + `Log Analytics`

