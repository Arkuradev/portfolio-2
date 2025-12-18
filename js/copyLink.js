document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('copyLink');
    const out = document.getElementById('copyStatus');

    if (!btn) return;

    btn.addEventListener('click', async () => {
        const original = btn.textContent;
        
        try {
            await navigator.clipboard.writeText(window.location.href);
            btn.textContent = 'Copied ✓';
            btn.classList.add('btn-primary');

            if (out) out.textContent = 'Link copied';

            setTimeout(() => {
                btn.textContent = original;
                btn.classList.remove('btn-primary');
                if (out) out.textContent = '';
            }, 1400);
        } catch {
            if (out) out.textContent = 'Could not copy';
            setTimeout(() => {
                if (out) out.textContent = '';
            }, 1400); 
        }
    });
});