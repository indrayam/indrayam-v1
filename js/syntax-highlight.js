(function () {
	"use strict";

	function languageHint(source) {
		var firstLine = source.split(/\r?\n/, 1)[0];

		if (/^#!.*\b(?:python|python\d*)\b/i.test(firstLine)) return "python";
		if (/^#!.*\b(?:perl|perl\d*)\b/i.test(firstLine)) return "perl";
		if (/^#!.*\b(?:groovy|java)\b/i.test(firstLine)) return "groovy";
		if (/^#!.*\b(?:bash|sh|zsh)\b/i.test(firstLine)) return "bash";
		if (/^\s*<\?xml\b|^\s*<!DOCTYPE\b|<web-app\b|<servlet\b|<property\b/i.test(source)) return "xml";
		if (/<%@\s*taglib\b|<%=?/.test(source)) return "jsp";
		if (/^\s*(?:SQL>|mysql>|PROMPT\b)|\b(?:SELECT|INSERT\s+INTO|UPDATE\s+\w+\s+SET|DELETE\s+FROM|CREATE\s+(?:TABLE|DATABASE))\b/i.test(source)) return "sql";
		if (/^\s*(?:[.#]?[a-z][\w-]*\s*\{|font\s*:|background(?:-color)?\s*:)/im.test(source)) return "css";
		if (/^\s*<\?(?:php)?\b|\bmysql_query\s*\(/i.test(source)) return "php";
		if (/\b(?:public|private|protected)\s+(?:static\s+)?(?:class|interface|void|int|String)\b|^\s*package\s+[\w.]+;/m.test(source)) return "java";
		if (/^\s*(?:\([^)]*prompt\)|\[[^\]]+\][#$]|(?:export|alias|function)\b)/im.test(source)) return "bash";

		return null;
	}

	function highlightCodeBlocks() {
		if (!window.hljs) return;

		document.querySelectorAll("pre").forEach(function (pre) {
			if (pre.dataset.syntaxHighlighted || pre.querySelector("font")) return;

			var source = pre.innerText || pre.textContent;
			if (!source.trim()) return;

			var language = languageHint(source);
			var result;

			if (language && window.hljs.getLanguage(language)) {
				result = window.hljs.highlight(source, {
					language: language,
					ignoreIllegals: true
				});
			} else {
				result = window.hljs.highlightAuto(source);
			}

			pre.innerHTML = "<code class=\"hljs\">" + result.value + "</code>";
			pre.dataset.syntaxHighlighted = "true";
			if (result.language) pre.dataset.language = result.language;
		});
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", highlightCodeBlocks);
	} else {
		highlightCodeBlocks();
	}
}());
