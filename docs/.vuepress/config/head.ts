const head = // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
[
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }],  // 首页显示时间
  ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }], // 信息统计需要
  [
    'meta',
    {
      name: 'keywords',
      content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown\
                后端,后端技术,后端开发,后端框架,Spring,Redis,Dubbo,Shiro,JavaEE,Java,Python,Go,MySQL,SQL,Oracle,设计模式,架构师,安全\
                安全,SQL注入,XSS,SDL,DevSecOps,Security,XXE,RCE,CVE,代码审计,漏洞挖掘,渗透测试,安全工具,安全资讯,安全技术,安全研究,安全团队'
    },
  ],

  ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],  // 信息统计需要
  
  ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  // [
  //   'script',
  //   {
  //     'data-ad-client': 'ca-pub-7828333725993554',
  //     async: 'async',
  //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //   },
  // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
]

export default head