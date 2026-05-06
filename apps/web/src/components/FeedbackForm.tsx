"use client";

import { useState } from "react";

type FeedbackCategory = "bug" | "suggestion" | "question" | "praise" | "other";

type FeedbackFormProps = {
  pagePath?: string;
  pageUrl?: string;
  onClose?: () => void;
};

const categories: { value: FeedbackCategory; label: string }[] = [
  { value: "bug", label: "Report a bug" },
  { value: "suggestion", label: "Suggest an improvement" },
  { value: "question", label: "Ask a question" },
  { value: "praise", label: "Share praise" },
  { value: "other", label: "Something else" },
];

export function FeedbackForm({ pagePath, pageUrl, onClose }: FeedbackFormProps) {
  const [rating, setRating] = useState<number>(0);
  const [category, setCategory] = useState<FeedbackCategory>("suggestion");
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!feedback.trim()) {
      setErrorMessage("Please enter your feedback");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating: rating || undefined,
          category,
          feedback,
          email: email || undefined,
          pagePath,
          pageUrl,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit");
      }

      setStatus("success");
      setRating(0);
      setFeedback("");
      setEmail("");
      setCategory("suggestion");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="feedback-form feedback-success">
        <h3>Thank you!</h3>
        <p>Your feedback has been submitted successfully.</p>
        <button
          type="button"
          className="button secondary"
          onClick={() => {
            setStatus("idle");
            onClose?.();
          }}
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <div className="feedback-header">
        <h3>Share your feedback</h3>
        {onClose && (
          <button
            type="button"
            className="feedback-close"
            onClick={onClose}
            aria-label="Close feedback form"
          >
            ×
          </button>
        )}
      </div>

      <div className="feedback-field">
        <label>How helpful is this page?</label>
        <div className="rating-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={star <= rating ? "star active" : "star"}
              onClick={() => setRating(star)}
              aria-label={`${star} star${star > 1 ? "s" : ""}`}
            >
              {star <= rating ? "★" : "☆"}
            </button>
          ))}
        </div>
      </div>

      <div className="feedback-field">
        <label htmlFor="feedback-category">What&apos;s this about?</label>
        <select
          id="feedback-category"
          value={category}
          onChange={(e) => setCategory(e.target.value as FeedbackCategory)}
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div className="feedback-field">
        <label htmlFor="feedback-message">Your feedback *</label>
        <textarea
          id="feedback-message"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Tell us what you think..."
          rows={4}
          required
        />
      </div>

      <div className="feedback-field">
        <label htmlFor="feedback-email">
          Email <span className="optional">(optional)</span>
        </label>
        <input
          id="feedback-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <small>Only if you&apos;d like a follow-up</small>
      </div>

      {status === "error" && (
        <div className="feedback-error">{errorMessage}</div>
      )}

      <div className="feedback-actions">
        <button
          type="submit"
          className="button"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send feedback"}
        </button>
        {onClose && (
          <button
            type="button"
            className="button secondary"
            onClick={onClose}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
