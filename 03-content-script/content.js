async function highlightHeadings() {
  const headings = Array.from(document.querySelectorAll("h1"));
  const batchSize = 20;

  for (let index = 0; index < headings.length; index += batchSize) {
    const batch = headings.slice(index, index + batchSize);

    await new Promise((resolve) => {
      requestAnimationFrame(() => {
        for (const heading of batch) {
          heading.style.backgroundColor = "yellow";
        }
        resolve();
      });
    });

    if (globalThis.scheduler?.yield) {
      await globalThis.scheduler.yield();
    }
  }
}

void highlightHeadings().catch((error) => {
  console.error("Failed to highlight H1 elements:", error);
});
