import { defineConfig } from "@vue/cli-service";
import rehypeHighlight from "rehype-highlight";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeMathJaxSvg from "rehype-mathjax";

const mathjaxConfig = {
    loader: {
        load: ['[tex]/ams'],
    },
    tex: {
        packages: {
            '[+]': ['ams'],
        },
    },
};

export default defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: 'raw-loader',
                },
                {
                    test: /\.mdx?$/,
                    use: [
                        { loader: 'babel-loader' },
                        {
                            loader: '@mdx-js/loader',
                            options: {
                                jsx: true,
                                remarkPlugins: [
                                    remarkMath,
                                    remarkGfm,
                                ],
                                rehypePlugins: [
                                    rehypeHighlight,
                                    () => rehypeMathJaxSvg(mathjaxConfig),
                                ],
                            },
                        }
                    ],
                }
            ],
        },
    },
});
