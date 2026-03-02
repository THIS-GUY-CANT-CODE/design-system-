// ============================================================================
//  SONNER (TOASTER) MOLECULE
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary).
//  Imports: atoms only. No next-themes dependency.
// ============================================================================
import * as React from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--card-ds-bg)",
          "--normal-text": "var(--fg-primary)",
          "--normal-border": "var(--border-default)",
          "--success-bg": "var(--bg-success-subtle)",
          "--success-text": "var(--fg-success)",
          "--error-bg": "var(--bg-error-subtle)",
          "--error-text": "var(--fg-error)",
          "--warning-bg": "var(--bg-warning-subtle)",
          "--warning-text": "var(--fg-warning)",
          "--info-bg": "var(--bg-info-subtle)",
          "--info-text": "var(--fg-info)",
          fontFamily: "var(--font-family-primary)",
        } as React.CSSProperties
      }
      toastOptions={{
        style: {
          fontFamily: "var(--font-family-primary)",
          fontSize: "var(--text-base)",
          borderRadius: "var(--radius-md-ds)",
          boxShadow: "var(--shadow-lg)",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
