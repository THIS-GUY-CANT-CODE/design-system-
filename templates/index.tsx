// ============================================================================
//  TEMPLATES — Canonical barrel export
//  Re-exports all template-level (layout skeleton) components.
//  Templates define WHERE organisms go, NOT what they say.
//  They contain no real data — only placeholder slots via props,
//  children, or render props.
// ============================================================================

export { BaseTemplate } from "./BaseTemplate";
export type { BaseTemplateProps } from "./BaseTemplate";

export { DashboardTemplate } from "./DashboardTemplate";
export type { DashboardTemplateProps } from "./DashboardTemplate";

export { TablePageTemplate } from "./TablePageTemplate";
export type { TablePageTemplateProps } from "./TablePageTemplate";

export { FormPageTemplate } from "./FormPageTemplate";
export type { FormPageTemplateProps } from "./FormPageTemplate";

export { DetailPageTemplate } from "./DetailPageTemplate";
export type { DetailPageTemplateProps } from "./DetailPageTemplate";

export { EmptyStateTemplate } from "./EmptyStateTemplate";
export type { EmptyStateTemplateProps } from "./EmptyStateTemplate";
