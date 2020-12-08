const glob = require("glob");
const markdownIt = require("markdown-it");
const meta = require("markdown-it-meta");
const fs = require("fs");
const _ = require("lodash");

const sidebar = (directory, array) => {
    return array.map(i => {
        const children = _.sortBy(
            glob
                .sync(`./${directory}/${i[1]}/*.md`)
                .map(path => {
                    const md = new markdownIt();
                    const file = fs.readFileSync(path, "utf8");
                    md.use(meta);
                    md.render(file);
                    const order = md.meta.order;
                    return { path, order };
                })
                .filter(f => f.order !== false),
            ["order", "path"]
        )
            .map(f => f.path)
            .filter(f => !f.match("README"));

        return {
            title: i[0],
            children
        };
    });
};

module.exports = {
    base: "/",
    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }]
    ],
    locales: {
        // "/en": {
        //     lang: "en-US",
        //     title: "DipperNetwork Documents",
        //     description: "DipperNetwork Documents",
        // },
        "/": {
            lang: "简体中文",
            title: "DipperNetwork 文档",
            description: "DipperNetwork 文档",
        }
    },
    themeConfig: {
        repo: "cpucorecore/dippernetwork-docs",
        docsDir: "/",
        editLinks: true,
        docsBranch: "master",
        editLinkText: 'Help us improve this page!',
        locales: {
            "/": {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '帮助我们完善此文档',
                nav: [{
                    text: 'DipperNetwork 官网',
                    link: 'https://www.dippernetwork.com/'
                }],
                sidebar: sidebar("", [
                    ["快速开始", "/get-started"],
                    ["ERC20主网映射", "/mapping"],
                    ["概念", "/concepts"],
                    ["功能模块", "/features"],
                    ["守护进程", "/daemon"],
                    ["命令行客户端", "/cli-client"],
                    ["API服务", "/api"],
                    ["虚拟机", "/vm"],
                    ["高级教程", "/advanced"],
                ])
            }
        },
    }
};