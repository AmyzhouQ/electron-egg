/* empty css              *//* empty css              *//* empty css              */import{i as s}from"./main-1ad2265a.js";import{i as r}from"./ipcRenderer-5e19eaee.js";import{_ as e,o,b as i,i as p,a as d,w as l,l as t,g as n,t as a,p as u,h as c,B as g}from"./index-c35ca83b.js";const _={data:()=>({processPids:"",progress1:0,progress2:0,progress3:0,progress4:0,progress5:0,progress6:0,progress1_pid:0,progress2_pid:0,progress3_pid:0,progress4_pid:0,progress5_pid:0,progress6_pid:0}),mounted(){this.init()},methods:{init(){r.removeAllListeners(s.timerJobProgress),r.removeAllListeners(s.createPoolNotice),r.on(s.timerJobProgress,((s,r)=>{switch(r.jobId){case 1:this.progress1=r.number,this.progress1_pid=0==r.pid?r.pid:this.progress1_pid;break;case 2:this.progress2=r.number,this.progress2_pid=0==r.pid?r.pid:this.progress2_pid;break;case 3:this.progress3=r.number,this.progress3_pid=0==r.pid?r.pid:this.progress3_pid;break;case 4:this.progress4=r.number,this.progress4_pid=0==r.pid?r.pid:this.progress4_pid;break;case 5:this.progress5=r.number,this.progress5_pid=0==r.pid?r.pid:this.progress5_pid;break;case 6:this.progress6=r.number,this.progress6_pid=0==r.pid?r.pid:this.progress6_pid}})),r.on(s.createPoolNotice,((s,r)=>{let e=JSON.stringify(r);this.processPids=e}))},runJob(e,o){let i={id:e,type:"timer",action:o};r.invoke(s.someJob,i).then((s=>{if("close"!=o)switch(s.jobId){case 1:this.progress1_pid=s.result.pid;break;case 2:this.progress2_pid=s.result.pid}}))},createPool(){r.send(s.createPool,{number:3})},runJobByPool(e,o){let i={id:e,type:"timer",action:o};r.invoke(s.someJobByPool,i).then((s=>{switch(s.jobId){case 3:this.progress3_pid=s.result.pid;break;case 4:this.progress4_pid=s.result.pid;break;case 5:this.progress5_pid=s.result.pid;break;case 6:this.progress6_pid=s.result.pid}}))}}},b=s=>(u("data-v-7b3657d8"),s=s(),c(),s),h={id:"app-base-jobs"},m=b((()=>p("div",{class:"one-block-1"},[p("span",null," 1. 任务 / 并发任务 ")],-1))),k={class:"one-block-2"},f=b((()=>p("p",null,null,-1))),P=b((()=>p("div",{class:"one-block-1"},[p("span",null," 2. 任务池 / 并发任务 ")],-1))),J={class:"one-block-2"},v=b((()=>p("p",null,null,-1))),j=b((()=>p("p",null,null,-1))),y=b((()=>p("p",null,null,-1))),C=b((()=>p("p",null,null,-1)));const B=e(_,[["render",function(s,r,e,u,c,_){const b=g,B=t;return o(),i("div",h,[m,p("div",k,[d(B,null,{default:l((()=>[d(b,{onClick:r[0]||(r[0]=s=>_.runJob(1,"create"))},{default:l((()=>[n("执行任务1")])),_:1}),n(" 进度："+a(c.progress1)+" ， 进程pid："+a(c.progress1_pid)+" ",1),d(b,{onClick:r[1]||(r[1]=s=>_.runJob(1,"close"))},{default:l((()=>[n("关闭")])),_:1})])),_:1}),f,d(B,null,{default:l((()=>[d(b,{onClick:r[2]||(r[2]=s=>_.runJob(2,"create"))},{default:l((()=>[n("执行任务2")])),_:1}),n(" 进度："+a(c.progress2)+" ， 进程pid："+a(c.progress2_pid)+" ",1),d(b,{onClick:r[3]||(r[3]=s=>_.runJob(2,"close"))},{default:l((()=>[n("关闭")])),_:1})])),_:1})]),P,p("div",J,[d(B,null,{default:l((()=>[d(b,{onClick:r[4]||(r[4]=s=>_.createPool())},{default:l((()=>[n("创建进程池")])),_:1}),n(" 进程pids："+a(c.processPids),1)])),_:1}),v,d(B,null,{default:l((()=>[d(b,{onClick:r[5]||(r[5]=s=>_.runJobByPool(3,"run"))},{default:l((()=>[n("执行任务3")])),_:1}),n(" 进度："+a(c.progress3)+" ，进程pid："+a(c.progress3_pid),1)])),_:1}),j,d(B,null,{default:l((()=>[d(b,{onClick:r[6]||(r[6]=s=>_.runJobByPool(4,"run"))},{default:l((()=>[n("执行任务4")])),_:1}),n(" 进度："+a(c.progress4)+" ，进程pid："+a(c.progress4_pid),1)])),_:1}),y,d(B,null,{default:l((()=>[d(b,{onClick:r[7]||(r[7]=s=>_.runJobByPool(5,"run"))},{default:l((()=>[n("执行任务5")])),_:1}),n(" 进度："+a(c.progress5)+" ，进程pid："+a(c.progress5_pid),1)])),_:1}),C,d(B,null,{default:l((()=>[d(b,{onClick:r[8]||(r[8]=s=>_.runJobByPool(6,"run"))},{default:l((()=>[n("执行任务6")])),_:1}),n(" 进度："+a(c.progress6)+" ，进程pid："+a(c.progress6_pid),1)])),_:1})])])}],["__scopeId","data-v-7b3657d8"]]);export{B as default};