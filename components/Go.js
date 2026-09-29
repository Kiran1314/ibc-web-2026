'use client';

import { useRouter } from 'next/navigation';

// A button or card that navigates on click (the original used inline `location.href` handlers).
// Non-button elements get the same keyboard/link semantics main.js used to add at runtime.
export default function Go({ as: Tag = 'button', to, className, children, ...rest }) {
  const router = useRouter();
  const go = () => router.push(to);

  if (Tag === 'button') {
    return (
      <button className={className} onClick={go} {...rest}>
        {children}
      </button>
    );
  }
  return (
    <Tag
      className={`${className ? className + ' ' : ''}interactive-card`}
      role="link"
      tabIndex={0}
      onClick={go}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          go();
        }
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
