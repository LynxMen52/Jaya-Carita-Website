import { useState } from "react";
import axios from "axios";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { waLink } from "@/lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INTERESTS = [
    { value: "property", label: "Property — Sale / Lease" },
    { value: "legal", label: "Legal Services" },
    { value: "visa", label: "Visa Services" },
    { value: "management", label: "Property Management" },
    { value: "general", label: "General inquiry" },
];

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        country: "",
        interest: "property",
        budget: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);

    const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim()) {
            toast.error("Please add your name and email.");
            return;
        }
        setSubmitting(true);
        try {
            await axios.post(`${API}/leads`, form);
            toast.success("Inquiry received. Opening WhatsApp to continue the conversation…");
            const summary = `Hi Jaya Carita, I just submitted an inquiry.\n\nName: ${form.name}\nEmail: ${form.email}${
                form.country ? `\nCountry: ${form.country}` : ""
            }\nInterest: ${form.interest}${form.budget ? `\nBudget: ${form.budget}` : ""}${
                form.message ? `\n\nMessage: ${form.message}` : ""
            }`;
            setTimeout(() => {
                window.open(waLink(summary), "_blank", "noopener,noreferrer");
            }, 600);
            setForm({
                name: "",
                email: "",
                country: "",
                interest: "property",
                budget: "",
                message: "",
            });
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong. Please try WhatsApp instead.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="contact-form"
            data-testid="contact-form-section"
            className="bg-brand-bg py-24 md:py-32"
        >
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    <div className="lg:col-span-5">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-brand-terracotta mb-5 flex items-center gap-3">
                            <span className="inline-block w-10 h-px bg-brand-terracotta" />
                            Start a conversation
                        </p>
                        <h2 className="font-serif font-light text-brand-olive text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
                            Tell us what
                            <br />
                            <span className="italic">you&apos;re looking</span> for.
                        </h2>
                        <p className="mt-8 text-brand-muted text-base md:text-lg font-light leading-relaxed max-w-md">
                            Drop a few details — we&apos;ll reply on WhatsApp within a few hours,
                            with a shortlist tailored to your brief.
                        </p>

                        <div className="mt-10 space-y-3 text-sm text-brand-muted font-light">
                            <p>
                                <span className="text-brand-olive font-medium">Prefer chat?</span>{" "}
                                <a
                                    href={waLink()}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline underline-offset-4 hover:text-brand-terracotta transition-colors"
                                    data-testid="contact-direct-whatsapp"
                                >
                                    Message us directly →
                                </a>
                            </p>
                        </div>
                    </div>

                    <form
                        onSubmit={onSubmit}
                        data-testid="contact-form"
                        className="lg:col-span-7 space-y-6"
                    >
                        <div className="grid sm:grid-cols-2 gap-6">
                            <Field
                                label="Full name"
                                testid="field-name"
                                value={form.name}
                                onChange={update("name")}
                                required
                                placeholder="Jane Doe"
                            />
                            <Field
                                label="Email"
                                testid="field-email"
                                type="email"
                                value={form.email}
                                onChange={update("email")}
                                required
                                placeholder="jane@example.com"
                            />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <Field
                                label="Country (optional)"
                                testid="field-country"
                                value={form.country}
                                onChange={update("country")}
                                placeholder="Australia"
                            />
                            <div>
                                <label className="block text-[10px] uppercase tracking-[0.24em] text-brand-muted mb-2">
                                    I&apos;m interested in
                                </label>
                                <select
                                    data-testid="field-interest"
                                    value={form.interest}
                                    onChange={update("interest")}
                                    className="w-full bg-transparent border-b border-brand-line py-3 text-brand-ink focus:border-brand-olive focus:outline-none transition-colors"
                                >
                                    {INTERESTS.map((o) => (
                                        <option key={o.value} value={o.value}>
                                            {o.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <Field
                            label="Budget range (optional)"
                            testid="field-budget"
                            value={form.budget}
                            onChange={update("budget")}
                            placeholder="USD 250K – 500K"
                        />
                        <div>
                            <label className="block text-[10px] uppercase tracking-[0.24em] text-brand-muted mb-2">
                                Message
                            </label>
                            <textarea
                                data-testid="field-message"
                                value={form.message}
                                onChange={update("message")}
                                rows={4}
                                placeholder="Tell us about your ideal villa, preferred areas, timeline…"
                                className="w-full bg-transparent border-b border-brand-line py-3 text-brand-ink focus:border-brand-olive focus:outline-none transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            data-testid="contact-submit"
                            className="group inline-flex items-center gap-3 bg-brand-olive text-brand-bg px-7 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-brand-olive-hover transition-colors duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {submitting ? (
                                <>
                                    <Loader2 size={16} className="animate-spin" />
                                    Sending…
                                </>
                            ) : (
                                <>
                                    Send & continue on WhatsApp
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform duration-500 group-hover:translate-x-1"
                                    />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

function Field({ label, testid, value, onChange, type = "text", required, placeholder }) {
    return (
        <div>
            <label className="block text-[10px] uppercase tracking-[0.24em] text-brand-muted mb-2">
                {label} {required && <span className="text-brand-terracotta">*</span>}
            </label>
            <input
                data-testid={testid}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-brand-line py-3 text-brand-ink placeholder:text-brand-muted/50 focus:border-brand-olive focus:outline-none transition-colors"
            />
        </div>
    );
}
