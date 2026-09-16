// ─────────────────────────────────────────────
// Contact Service
// Handles message validation and submission
// ─────────────────────────────────────────────

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate contact form fields
 * @param {{ name: string, email: string, message: string }} fields
 * @returns {{ valid: boolean, errors: Record<string, string> }}
 */
export const validateContactForm = (fields) => {
  const errors = {};

  if (!fields.name || fields.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!fields.email || !EMAIL_REGEX.test(fields.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!fields.message || fields.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Submit contact form (simulated — replace with real API call)
 * @param {{ name: string, email: string, message: string }} payload
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export const submitContactForm = async (payload) => {
  const { valid, errors } = validateContactForm(payload);

  if (!valid) {
    return { success: false, errors };
  }

  // Simulated async API call — swap for real endpoint
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return {
    success: true,
    message: "Message sent! I'll get back to you soon.",
  };
};
