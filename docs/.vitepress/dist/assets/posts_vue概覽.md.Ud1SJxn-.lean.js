import{_ as t,D as h,c as k,j as s,a as i,I as n,w as l,a2 as p,o as e}from"./chunks/framework.TQ19nxCs.js";const E="/assets/%E5%85%A8%E5%B1%80%E4%BA%8B%E4%BB%B6%E6%80%BB%E7%BA%BF.1G7CI6oi.png",d="/assets/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E4%B8%8E%E5%8F%91%E5%B8%83.evLZgxnB.png",r="/assets/image-20211120101929608.RZJUA_kK.png",g="/assets/vuex.DQaHIFFF.png",Y=JSON.parse('{"title":"vue概覽","description":"","frontmatter":{"next":{"text":"如何在沒有nodejs的環境下使用vue vuetify開發","link":"/posts/vue-vuetify-without-nodejs"}},"headers":[],"relativePath":"posts/vue概覽.md","filePath":"posts/vue概覽.md"}'),o={name:"posts/vue概覽.md"},c=p("",27),y=s("b",null,"子组件 ===> 父组件",-1),u=p("",4),F=s("code",null,"this.$refs.xxx.$on('atguigu',回调)",-1),A=s("h2",{id:"全局事件总线-globaleventbus",tabindex:"-1"},[i("全局事件总线（GlobalEventBus） "),s("a",{class:"header-anchor",href:"#全局事件总线-globaleventbus","aria-label":'Permalink to "全局事件总线（GlobalEventBus）"'},"​")],-1),C=s("li",null,"安装全局事件总线：",-1),m=p("",2),b=p("",2),D={start:"4"},v=s("code",null,"$off",-1),B=s("p",null,[s("img",{src:E,alt:"avatar"})],-1),_=s("h2",{id:"消息订阅与发布-pubsub",tabindex:"-1"},[i("消息订阅与发布（pubsub） "),s("a",{class:"header-anchor",href:"#消息订阅与发布-pubsub","aria-label":'Permalink to "消息订阅与发布（pubsub）"'},"​")],-1),q=s("li",null,[s("p",null,"使用步骤：")],-1),x=s("li",null,[s("p",null,[i("安装 pubsub:"),s("code",null,"npm i pubsub-js")])],-1),f=s("li",null,[s("p",null,[i("引入："),s("code",null,"import pubsub from 'pubsub-js'")])],-1),j=p("",1),V={start:"4"},T=s("li",null,[s("p",null,[i("提供数据："),s("code",null,"pubsub.publish('xxx',数据)")])],-1),P=s("code",null,"pubsub.unsubscribe(pid)",-1),S=p("",19),$=s("b",null,"父组件 ===> 子组件",-1),I=s("li",null,[s("p",null,"分类：默认插槽、具名插槽、作用域插槽")],-1),w=p("",5),N={start:"3"},W=s("p",null,"作用域插槽",-1),R=s("li",null,[s("p",null,"具体编码：")],-1),M=p("",1),O=p("",32),J=s("b",null,"name",-1),G=p("",17);function H(L,z,Z,K,Q,U){const a=h("font");return e(),k("div",null,[c,s("ol",null,[s("li",null,[s("p",null,[i("一种组件间通信的方式，适用于："),n(a,{style:{color:"red"}},{default:l(()=>[y]),_:1})])]),s("li",null,[s("p",null,[i("使用场景：A 是父组件，B 是子组件，B 想给 A 传数据，那么就要在 A 中给 B 绑定自定义事件（"),n(a,{style:{color:"red"}},{default:l(()=>[i("事件的回调在 A 中")]),_:1}),i("）。")])]),u,s("li",null,[s("p",null,[i("注意：通过"),F,i("绑定自定义事件时，回调"),n(a,{style:{color:"red"}},{default:l(()=>[i("要么配置在 methods 中，要么用箭头函数")]),_:1}),i("，否则 this 指向会出问题！")])])]),A,s("ol",null,[s("li",null,[i("一种组件间通信的方式，适用于"),n(a,{style:{color:"red"}},{default:l(()=>[i("任意组件间通讯")]),_:1}),i("。")]),C]),m,s("blockquote",null,[s("ol",null,[s("li",null,[i("接收数据：A 组件想接收数据，则在 A 组件中给$bus 绑定自定义事件，事件的"),n(a,{style:{color:"red"}},{default:l(()=>[i("回调留在 A 组件自身")]),_:1})])]),b]),s("ol",D,[s("li",null,[i("最好在 beforeDestroy 钩子中，用"),v,i("去解绑"),n(a,{style:{color:"red"}},{default:l(()=>[i("当前组件所用到的")]),_:1}),i("事件。")])]),B,_,s("ol",null,[s("li",null,[s("p",null,[i("一种组件间通信的方式，适用于在"),n(a,{style:{color:"red"}},{default:l(()=>[i("任意组件间通信")]),_:1}),i("。")])]),q]),s("blockquote",null,[s("ol",null,[x,f,s("li",null,[s("p",null,[i("接收数据：A 组件想接收数据，则在 A 组件中订阅消息，订阅的"),n(a,{style:{color:"red"}},{default:l(()=>[i("回调留在 A 组件自身")]),_:1}),i("。")])])]),j,s("ol",V,[T,s("li",null,[s("p",null,[i("最好在 beforeDestroy 钩子中，用"),P,i("去"),n(a,{style:{color:"red"}},{default:l(()=>[i("取消订阅")]),_:1}),i("。")])])])]),S,s("ol",null,[s("li",null,[s("p",null,[i("作用：让父组件可以向子组件指定位置插入 html 结构，也是一种组件间通信的方式，适用于"),n(a,{style:{color:"red"}},{default:l(()=>[$]),_:1}),i("。")])]),I,s("li",null,[w,s("ol",N,[s("li",null,[W,s("ol",null,[s("li",null,[s("p",null,[i("理解"),n(a,{style:{color:"red"}},{default:l(()=>[i("数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。")]),_:1}),i("（games 数据在 Category 组件中，但使用数据所遍历出来的结构由 App 组件决定）")])]),R])])]),M])]),O,s("p",null,[i("特别注意：路由携带 params 参数时，若使用 to 的对象写法，则不能使用 path 配置项，"),n(a,{style:{color:"red"}},{default:l(()=>[i("必须使用"),J,i("配置！")]),_:1})]),G])}const ss=t(o,[["render",H]]);export{Y as __pageData,ss as default};
