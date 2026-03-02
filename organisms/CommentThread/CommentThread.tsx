// ============================================================================
//  ORGANISM: CommentThread
//  Nested discussion thread with reply input.
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary).
//  Imports: atoms only.
// ============================================================================
import React from "react";
import { Typography, Avatar, Divider, Button, TextInput } from "../../atoms";

interface Comment {
  author: string;
  text: string;
  time: string;
  replies?: Comment[];
}

interface CommentThreadProps {
  comments?: Comment[];
  className?: string;
}

export function CommentThread({ comments, className }: CommentThreadProps) {
  const defaultComments: Comment[] = [
    { author: "Sarah Chen", text: "The deployment looks stable. All health checks passed.", time: "2h ago", replies: [{ author: "Marcus W.", text: "Agreed — latency is back to normal.", time: "1h ago" }] },
    { author: "Aisha Patel", text: "Should we roll back the cache layer change?", time: "3h ago" },
  ];
  const c = comments ?? defaultComments;

  const CommentItem = ({ comment, nested }: { comment: Comment; nested?: boolean }) => (
    <div style={{ display: "flex", gap: "var(--space-3)", paddingLeft: nested ? "var(--space-8)" : undefined }}>
      <Avatar size="sm" shape="circle" label={comment.author.split(" ").map((s) => s[0]).join("")} style={{ flexShrink: 0, marginTop: "var(--space-half)" }} />
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          <Typography variant="label" weight="semibold" color="primary">{comment.author}</Typography>
          <Typography variant="micro" color="tertiary">{comment.time}</Typography>
        </div>
        <Typography variant="body" color="secondary" style={{ marginTop: "var(--space-1)" }}>{comment.text}</Typography>
        {comment.replies?.map((r, i) => (
          <div key={i} style={{ marginTop: "var(--space-3)" }}>
            <CommentItem comment={r} nested />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={className}
      style={{
        background: "var(--card-ds-bg)",
        border: "var(--border-width-thin) solid var(--card-ds-border)",
        borderRadius: "var(--radius-md-ds)",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "var(--space-4) var(--space-6)", borderBottom: "var(--border-width-thin) solid var(--border-divider)" }}>
        <Typography variant="title" weight="semibold" color="primary">Discussion</Typography>
      </div>
      <div style={{ padding: "var(--space-4) var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {c.map((comment, i) => (
          <div key={i} style={{ display: "contents" }}>
            {i > 0 && <Divider />}
            <CommentItem comment={comment} />
          </div>
        ))}
        <Divider />
        <div style={{ display: "flex", gap: "var(--space-3)" }}>
          <Avatar size="sm" shape="circle" label="ME" style={{ flexShrink: 0 }} />
          <div style={{ flex: 1, display: "flex", gap: "var(--space-2)" }}>
            <TextInput placeholder="Add a comment…" style={{ flex: 1 }} />
            <Button variant="primary" size="sm">Post</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
