export default function getPlainTextSnippet(html = "", maxLength = 200) {
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    return text.length > maxLength
        ? text.slice(0, maxLength).trim() + "..."
        : text.trim();
}
