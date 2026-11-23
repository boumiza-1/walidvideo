import React from 'react';
import {AbsoluteFill, Sequence, Img, staticFile, interpolate, spring, useCurrentFrame, useVideoConfig, Easing} from 'remotion';

/** WALID VOYAGES - 40s social video, 1080x1920, 30fps.
 *  This edit is a MOTION DESIGN PREVIEW: the site screens in public/assets are
 *  labeled DEMO. Replace them with genuine screenshots of www.walid-voyages.com
 *  before publishing the ad. No price or payment transaction is fabricated.
 */
const C={blue:'#49AAE3', lime:'#B5D33F', navy:'#0B2741', deep:'#06182B', white:'#FFFFFF'};
const arFont='"Segoe UI", "Noto Sans Arabic", Tahoma, Arial, sans-serif';
const titleStyle:React.CSSProperties={fontFamily:arFont, fontWeight:900, color:'white', textAlign:'center', direction:'rtl', lineHeight:1.26, textShadow:'0 8px 28px rgba(2,18,38,.38)'};
const baseText:React.CSSProperties={fontFamily:arFont, direction:'rtl', lineHeight:1.38};
const clamp=(x:number,a=0,b=1)=>Math.min(b,Math.max(a,x));
const fadeSlide=(frame:number,duration:number=150)=>({opacity:interpolate(frame,[0,12,duration-15,duration],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'}),transform:`translateY(${interpolate(frame,[0,19],[50,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}px)`});
const Pill:React.FC<{children:React.ReactNode;lime?:boolean}> = ({children,lime=false})=><div style={{borderRadius:48,background:lime?C.lime:'rgba(255,255,255,.14)',color:lime?C.navy:'white',padding:'16px 32px',fontFamily:arFont,fontSize:32,fontWeight:800,whiteSpace:'nowrap',border:'1px solid rgba(255,255,255,.18)'}}>{children}</div>;
const Backdrop:React.FC<{frame:number;phase:number}> = ({frame,phase})=>{
 const drift=Math.sin(frame/48+phase)*38;
 return <AbsoluteFill style={{overflow:'hidden',background:`radial-gradient(ellipse at ${52+Math.sin(frame/80)*10}% 13%, #3B86AF 0%, ${C.navy} 52%, ${C.deep} 100%)`}}>
  <div style={{position:'absolute',width:1180,height:1180,borderRadius:'50%',left:-450+drift,top:900,background:'radial-gradient(circle,rgba(73,170,227,.28),transparent 70%)'}}/>
  <div style={{position:'absolute',width:680,height:680,borderRadius:'50%',right:-300-drift,top:80,background:'radial-gradient(circle,rgba(181,211,63,.26),transparent 74%)'}}/>
  <div style={{position:'absolute',width:1800,height:490,borderRadius:'50%',left:-350,bottom:-320,transform:`rotate(${12+Math.sin(frame/90)*5}deg)`,background:`linear-gradient(105deg,${C.blue},${C.lime})`,opacity:.55}} />
  <div style={{position:'absolute',width:2000,height:220,borderRadius:'50%',left:-540,bottom:-190,transform:'rotate(-9deg)',border:'4px solid rgba(255,255,255,.18)'}}/>
 </AbsoluteFill>;
};
const Brand:React.FC<{compact?:boolean}> = ({compact=false})=><div style={{display:'flex',alignItems:'center',gap:12,justifyContent:'center',direction:'ltr'}}><span style={{fontFamily:'Arial, sans-serif',fontSize:compact?36:54,fontWeight:900,color:'white',letterSpacing:-1}}>WALID</span><span style={{fontFamily:'Arial, sans-serif',fontSize:compact?35:50,fontWeight:800,color:C.lime,letterSpacing:-2}}>VOYAGES</span></div>;
const Shell:React.FC<{children:React.ReactNode;frame:number;phase:number;eyebrow:string}> = ({children,frame,phase,eyebrow})=><AbsoluteFill><Backdrop frame={frame} phase={phase}/><div style={{position:'absolute',top:106,left:70,right:70,display:'flex',justifyContent:'space-between',alignItems:'center',opacity:.95}}><div style={{fontFamily:'Arial',fontWeight:900,color:C.lime,fontSize:28,letterSpacing:3}}>WALID VOYAGES</div><div style={{border:'2px solid rgba(255,255,255,.28)',borderRadius:30,padding:'11px 22px',fontSize:23,fontWeight:700,color:'white'}}>TUNISIE</div></div><div style={{position:'absolute',top:180,left:50,right:50,display:'flex',justifyContent:'center'}}><Pill>{eyebrow}</Pill></div><div style={{position:'absolute',bottom:100,left:0,right:0,textAlign:'center',fontFamily:'Arial',fontSize:28,color:'rgba(255,255,255,.8)',letterSpacing:1}}>www.walid-voyages.com</div>{children}</AbsoluteFill>;
const ArabicTitle:React.FC<{text:string;frame:number;size?:number;top?:number;color?:string}> = ({text,frame,size=80,top=310,color})=><div style={{...titleStyle,...fadeSlide(frame,250),position:'absolute',top,left:90,right:90,fontSize:size,color:color||'white'}}>{text}</div>;
const QuickRow:React.FC<{items:string[];frame:number;top:number}> = ({items,frame,top})=><div style={{position:'absolute',top,left:50,right:50,display:'flex',justifyContent:'center',gap:15,flexWrap:'wrap',opacity:clamp((frame-17)/18)}}>{items.map((x,i)=><div key={i} style={{transform:`translateY(${interpolate(frame,[14+i*5,32+i*5],[35,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}px)`}}><Pill lime={i===0}>{x}</Pill></div>)}</div>;
const Phone:React.FC<{frame:number;src:string;rotate?:number;top?:number;scale?:number}> = ({frame,src,rotate=0,top=700,scale=1})=>{
 const sway=Math.sin(frame/25)*2;
 const y=interpolate(frame,[0,30],[120,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 return <div style={{position:'absolute',width:610,height:1020,top,left:235,borderRadius:82,padding:16,background:'#111d2e',border:'7px solid #687782',boxShadow:'0 40px 100px rgba(0,0,0,.5)',transform:`translateY(${y}px) rotate(${rotate+sway}deg) scale(${scale})`,overflow:'hidden'}}>
  <div style={{position:'absolute',width:180,height:26,borderRadius:30,background:'#101b28',top:18,left:210,zIndex:3}}/>
  <div style={{borderRadius:58,overflow:'hidden',height:'100%',background:'#fff'}}><Img src={staticFile(src)} style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
 </div>;
};
const Scene:React.FC<{phase:number}> = ({phase})=>{
 const f=useCurrentFrame();
 if(phase===0)return <Shell frame={f} phase={0} eyebrow="سفرتك تبدأ من هنا"><ArabicTitle text="مازال تحجز من غير ما تقارن الأسعار؟" frame={f} top={420} size={103}/><div style={{position:'absolute',top:850,left:190,right:190,padding:44,borderRadius:48,background:'rgba(255,255,255,.12)',textAlign:'center',boxShadow:'0 20px 90px rgba(0,0,0,.3)'}}><div style={{color:C.lime,fontSize:170,fontFamily:'Arial',fontWeight:900}}>?</div><div style={{...baseText,fontSize:50,color:'white',fontWeight:700}}>الأحسن تشوف وتقارن بعينيك!</div></div><QuickRow items={['فنادق','رحلات','عروض']} frame={f} top={1440}/></Shell>;
 if(phase===1)return <Shell frame={f} phase={1} eyebrow="موقع وليد للأسفار"><ArabicTitle text="ادخل للموقع وشوف العروض" frame={f} top={310} size={80}/><Phone frame={f} src="assets/site-home.png" top={635} rotate={-6} scale={.92}/></Shell>;
 if(phase===2)return <Shell frame={f} phase={2} eyebrow="قارن قبل ما تختار"><ArabicTitle text="قارن الوجهات والأسعار بسهولة" frame={f} top={320} size={78}/><Phone frame={f} src="assets/site-results.png" top={660} rotate={5} scale={.91}/><div style={{position:'absolute',top:1485,left:90,right:90,display:'flex',justifyContent:'center'}}><Pill lime>اختار اللي يناسبك</Pill></div></Shell>;
 if(phase===3)return <Shell frame={f} phase={3} eyebrow="عروض ومفاجآت"><ArabicTitle text="Promotions وعروض تستاهل!" frame={f} top={330} size={81}/>{['فنادق في تونس','رحلات ووجهات','عروض خاصة'].map((s,i)=><div key={i} style={{position:'absolute',top:670+i*235,left:105,right:105,background:i===1?'rgba(181,211,63,.92)':'rgba(255,255,255,.12)',borderRadius:38,border:'2px solid rgba(255,255,255,.26)',padding:'62px 60px',opacity:clamp((f-15-i*14)/20),transform:`translateX(${interpolate(f,[0+i*10,28+i*10],[170,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}px)`,fontSize:63,fontWeight:800,color:i===1?C.navy:'white',textAlign:'center',...baseText}}>{s}</div>)}</Shell>;
 if(phase===4)return <Shell frame={f} phase={4} eyebrow="الحجز من تليفونك"><ArabicTitle text="احجز من أي بلاصة" frame={f} top={390} size={94}/><div style={{position:'absolute',top:830,left:100,right:100,background:'rgba(255,255,255,.11)',border:'2px solid rgba(255,255,255,.24)',borderRadius:54,padding:'90px 58px',textAlign:'center',transform:`scale(${.9+.1*clamp(f/25)})`}}><div style={{fontSize:130,color:C.lime}}>✓</div><div style={{...baseText,fontSize:62,color:'white',fontWeight:800}}>ساهل • سريع • من وين ما كنت</div></div></Shell>;
 if(phase===5)return <Shell frame={f} phase={5} eyebrow="Réservation en ligne"><ArabicTitle text="حجز ودفع أونلاين بكل راحة" frame={f} top={410} size={83}/><div style={{position:'absolute',top:850,left:175,right:175,borderRadius:55,padding:'95px 55px',background:'linear-gradient(150deg,#f2faff,#c7e8fb)',boxShadow:'0 30px 80px rgba(0,0,0,.25)',textAlign:'center'}}><div style={{fontSize:118,color:C.blue}}>✓</div><div style={{fontFamily:'Arial',fontSize:47,color:C.navy,fontWeight:900}}>PAIEMENT EN LIGNE</div><div style={{fontSize:30,color:'#567189',marginTop:14}}>Démonstration illustrative — paiement non effectué</div></div><div style={{position:'absolute',top:1610,left:110,right:110,...baseText,color:'white',textAlign:'center',fontSize:31}}>تُعرض وسائل الدفع بعد التحقق من توفرها فعليًا بالموقع</div></Shell>;
 if(phase===6)return <Shell frame={f} phase={6} eyebrow="نلقانا ديما معاك"><ArabicTitle text="تحتاج مساعدة؟ نحنا على ذمّتك" frame={f} top={350} size={86}/><div style={{position:'absolute',top:800,left:120,right:120,background:'rgba(255,255,255,.15)',borderRadius:50,padding:'78px 55px',border:'2px solid rgba(255,255,255,.23)',textAlign:'center'}}><div style={{fontSize:125}}>💬</div><div style={{...baseText,fontSize:60,color:'white',fontWeight:800}}>اتصل بينا، فريقنا يجاوبك</div></div></Shell>;
 return <Shell frame={f} phase={7} eyebrow="وليد للأسفار"><div style={{position:'absolute',top:455,left:80,right:80,textAlign:'center',transform:`scale(${.8+.2*spring({fps:30,frame:f,config:{damping:160}})})`}}><Brand/><div style={{height:16,background:C.lime,borderRadius:20,margin:'28px 100px 65px'}}/><div style={{...titleStyle,fontSize:98}}>قارن • اختار • احجز</div><div style={{...titleStyle,fontSize:80,marginTop:30,color:C.lime}}>وسافر مرتاح!</div></div><div style={{position:'absolute',top:1330,left:100,right:100,background:C.lime,borderRadius:36,padding:37,color:C.navy,fontSize:52,fontWeight:900,textAlign:'center'}}>www.walid-voyages.com</div></Shell>;
};
export const WalidSiteAd40:React.FC = ()=> <AbsoluteFill style={{backgroundColor:C.deep}}>
 <Sequence from={0} durationInFrames={150}><Scene phase={0}/></Sequence>
 <Sequence from={150} durationInFrames={150}><Scene phase={1}/></Sequence>
 <Sequence from={300} durationInFrames={180}><Scene phase={2}/></Sequence>
 <Sequence from={480} durationInFrames={180}><Scene phase={3}/></Sequence>
 <Sequence from={660} durationInFrames={150}><Scene phase={4}/></Sequence>
 <Sequence from={810} durationInFrames={150}><Scene phase={5}/></Sequence>
 <Sequence from={960} durationInFrames={120}><Scene phase={6}/></Sequence>
 <Sequence from={1080} durationInFrames={120}><Scene phase={7}/></Sequence>
 </AbsoluteFill>;
