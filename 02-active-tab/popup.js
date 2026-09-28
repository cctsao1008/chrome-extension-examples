async function showActiveTab() {
  const titleElement = document.getElementById("tabTitle");
  const urlElement = document.getElementById("tabUrl");

  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    if (!tab) {
      throw new Error("No active tab found.");
    }

    titleElement.textContent = tab.title ?? "(no title)";
    urlElement.textContent = tab.url ?? "(URL unavailable)";
  } catch (error) {
    console.error("Failed to query active tab:", error);
    titleElement.textContent = "Unable to read active tab";
    urlElement.textContent = error instanceof Error ? error.message : String(error);
  }
}

showActiveTab();
