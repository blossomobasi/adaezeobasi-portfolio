"use client";

import React from "react";
import emailjs from "@emailjs/browser";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import Button from "./Button";
import { profile } from "@/data/profile";

// EmailJS credentials come from .env.local (see .env.example).
// Template variables available: user_name, user_email, inquiry_type, subject, message
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const INQUIRY_TYPES = ["Full-time role", "Freelance project", "Collaboration", "Just saying hi"];
const MESSAGE_MIN = 20;
const MESSAGE_MAX = 1000;

type Fields = { user_name: string; user_email: string; subject: string; message: string };
type Status = "idle" | "sending" | "sent" | "error";

const initialFields: Fields = { user_name: "", user_email: "", subject: "", message: "" };

const validate = (fields: Fields) => {
	const errors: Partial<Record<keyof Fields, string>> = {};
	if (fields.user_name.trim().length < 2) errors.user_name = "Please enter your name.";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.user_email.trim())) errors.user_email = "Please enter a valid email address.";
	if (fields.message.trim().length < MESSAGE_MIN)
		errors.message = `Please tell me a bit more (at least ${MESSAGE_MIN} characters).`;
	return errors;
};

const inputClassName = (hasError: boolean) =>
	`w-full border-2 rounded-md h-11 px-3 bg-transparent transition-colors ${
		hasError
			? "border-red-400 dark:border-red-700"
			: "border-stone-300 focus-within:border-stone-500 dark:border-stone-800 dark:focus-within:border-stone-400"
	}`;

const Field = ({
	id,
	label,
	required,
	error,
	children,
}: {
	id: string;
	label: string;
	required?: boolean;
	error?: string;
	children: React.ReactNode;
}) => (
	<div className="w-full">
		<label htmlFor={id} className="block text-sm font-medium mb-1.5 text-stone-700 dark:text-stone-300">
			{label} {required ? <span className="text-red-500">*</span> : <span className="text-stone-400">(optional)</span>}
		</label>
		{children}
		{error && (
			<p id={`${id}-error`} className="mt-1 text-sm text-red-500">
				{error}
			</p>
		)}
	</div>
);

const ContactForm = () => {
	const formRef = React.useRef<HTMLFormElement | null>(null);
	const [fields, setFields] = React.useState<Fields>(initialFields);
	const [inquiryType, setInquiryType] = React.useState(INQUIRY_TYPES[0]);
	const [touched, setTouched] = React.useState<Partial<Record<keyof Fields, boolean>>>({});
	const [status, setStatus] = React.useState<Status>("idle");
	const [statusMessage, setStatusMessage] = React.useState("");

	const errors = validate(fields);
	const visibleError = (name: keyof Fields) => (touched[name] ? errors[name] : undefined);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFields((prev) => ({ ...prev, [name]: value }));
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setTouched((prev) => ({ ...prev, [e.target.name]: true }));
	};

	const fieldProps = (name: keyof Fields) => ({
		id: name,
		name,
		value: fields[name],
		onChange: handleChange,
		onBlur: handleBlur,
		"aria-invalid": !!visibleError(name),
		"aria-describedby": visibleError(name) ? `${name}-error` : undefined,
	});

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = formRef.current as HTMLFormElement;

		setTouched({ user_name: true, user_email: true, message: true });
		if (Object.keys(errors).length > 0) {
			const firstInvalid = form.querySelector<HTMLElement>("[aria-invalid='true'], :invalid");
			firstInvalid?.focus();
			return;
		}

		// Honeypot: real visitors never fill this hidden field
		if (new FormData(form).get("company_website")) {
			setStatus("sent");
			return;
		}

		// Without EmailJS configured, fall back to the visitor's mail client
		if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
			if (!profile.email) {
				setStatus("error");
				setStatusMessage("The contact form isn't set up yet. Please reach out via the links on this page.");
				return;
			}
			const subject = encodeURIComponent(`[${inquiryType}] ${fields.subject || "Hello from your portfolio"}`);
			const body = encodeURIComponent(`${fields.message}\n\n— ${fields.user_name} (${fields.user_email})`);
			window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
			return;
		}

		setStatus("sending");
		try {
			await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
			setStatus("sent");
			setFields(initialFields);
			setTouched({});
		} catch {
			setStatus("error");
			setStatusMessage(
				profile.email
					? `Something went wrong while sending your message. Please try again, or email me directly at ${profile.email}.`
					: "Something went wrong while sending your message. Please try again in a moment."
			);
		}
	};

	if (status === "sent") {
		return (
			<div
				role="status"
				className="w-full flex flex-col items-center justify-center text-center gap-3 p-10 rounded-md border border-green-300 bg-green-50 text-green-800 dark:border-green-900 dark:bg-green-950/40 dark:text-green-300"
			>
				<BsCheckCircle size={36} />
				<p className="text-lg font-semibold">Thanks for reaching out!</p>
				<p className="text-sm">Your message is on its way. I usually reply within 1–2 business days.</p>
				<button onClick={() => setStatus("idle")} className="mt-2 text-sm underline hover:no-underline">
					Send another message
				</button>
			</div>
		);
	}

	const messageLength = fields.message.length;

	return (
		<form ref={formRef} onSubmit={sendEmail} noValidate className="w-full space-y-5">
			<fieldset>
				<legend className="block text-sm font-medium mb-2 text-stone-700 dark:text-stone-300">
					What would you like to talk about?
				</legend>
				<div className="flex flex-wrap gap-2">
					{INQUIRY_TYPES.map((type) => (
						<label
							key={type}
							className={`cursor-pointer text-sm px-3 py-1.5 rounded-full border transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-500 ${
								inquiryType === type
									? "border-teal-600 bg-teal-50 text-teal-800 dark:bg-teal-950/50 dark:text-teal-300"
									: "border-stone-300 dark:border-stone-800 hover:border-stone-500"
							}`}
						>
							<input
								type="radio"
								name="inquiry_type"
								value={type}
								checked={inquiryType === type}
								onChange={() => setInquiryType(type)}
								className="sr-only"
							/>
							{type}
						</label>
					))}
				</div>
			</fieldset>

			<div className="grid sm:grid-cols-2 gap-5">
				<Field id="user_name" label="Name / Company" required error={visibleError("user_name")}>
					<input
						{...fieldProps("user_name")}
						className={inputClassName(!!visibleError("user_name"))}
						type="text"
						autoComplete="name"
						placeholder="Jane Doe"
						required
					/>
				</Field>
				<Field id="user_email" label="Email" required error={visibleError("user_email")}>
					<input
						{...fieldProps("user_email")}
						className={inputClassName(!!visibleError("user_email"))}
						type="email"
						autoComplete="email"
						placeholder="jane@company.com"
						required
					/>
				</Field>
			</div>

			<Field id="subject" label="Subject">
				<input
					{...fieldProps("subject")}
					className={inputClassName(false)}
					type="text"
					placeholder="e.g. Sales dashboard for our retail team"
				/>
			</Field>

			<Field id="message" label="Message" required error={visibleError("message")}>
				<textarea
					{...fieldProps("message")}
					className={`${inputClassName(!!visibleError("message"))} h-36 py-2 resize-y`}
					placeholder="Tell me about the role or project, the data you're working with, and what you'd like to find out."
					maxLength={MESSAGE_MAX}
					required
				/>
				<p className="text-right text-xs text-stone-500 mt-1">
					{messageLength}/{MESSAGE_MAX}
				</p>
			</Field>

			{/* Honeypot field, hidden from people and assistive tech */}
			<div aria-hidden="true" className="absolute -left-[9999px]">
				<input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
			</div>

			{status === "error" && (
				<div
					role="alert"
					className="flex items-start gap-2 p-3 rounded-md text-sm border border-red-300 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
				>
					<BsExclamationCircle className="mt-0.5 shrink-0" />
					<span>{statusMessage}</span>
				</div>
			)}

			<Button type="submit" disabled={status === "sending"} className="h-11 px-6 flex items-center gap-2">
				{status === "sending" ? (
					<>
						<CgSpinner className="animate-spin" size={18} /> Sending...
					</>
				) : (
					"Send message"
				)}
			</Button>
		</form>
	);
};

export default ContactForm;
