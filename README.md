# Chrome Extension Examples

Minimal, progressively structured examples for learning Chrome Extension development with Manifest V3.

## Examples

| Example | Focus | Permissions |
|---|---|---|
| `01-hello-world` | Minimal popup and DOM interaction | None |
| `02-active-tab` | Query the current active tab and display its title and URL | `tabs` |
| `03-content-script` | Inject a content script on action click and highlight all H1 elements | `activeTab`, `scripting` |

## Loading an example

1. Open `chrome://extensions` in Chrome.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the example directory, such as `01-hello-world`, `02-active-tab`, or `03-content-script`.

Each example is a standalone unpacked extension with its own `manifest.json`.
