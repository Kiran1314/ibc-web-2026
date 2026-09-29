'use client';

export default function ContactForm({ children, ...props }) {
  return (
    <form
      {...props}
      onSubmit={(e) => {
        const status = e.currentTarget.querySelector('.form-status');
        if (status) status.textContent = 'Opening your email client with your enquiry…';
      }}
    >
      {children}
    </form>
  );
}
