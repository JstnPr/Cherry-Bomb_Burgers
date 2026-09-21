import pkg from "js-beautify";
const beautifyHtml = pkg.html;

export default function(eleventyConfig) {
    // Passthrough Copies
    eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

    // JS-Beautify Indentation
    eleventyConfig.addTransform("beautify", function(content) {
        const outputPath = this.page?.outputPath;
        // Indent HTML Files
        if (outputPath && outputPath.endsWith(".html")) {
            return beautifyHtml(content, {
                indent_size: 3,
                indent_char: ' ',
                max_preserve_newlines: 1,
                wrap_line_length: 0,
                preserve_newlines: true,
                indent_inner_html: false,
                extra_liners: []
            });
        } return content;
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    }
}