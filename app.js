import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from "./config.js";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});

const ROADMAP = [{"date": "2026-08-16", "track": "Python", "topic": "Setup, syntax, print(), variables, data types", "detail": ""}, {"date": "2026-08-17", "track": "C++", "topic": "Setup, cin/cout, variables, data types", "detail": ""}, {"date": "2026-08-18", "track": "Python", "topic": "Operators, input, type conversion", "detail": ""}, {"date": "2026-08-19", "track": "C++", "topic": "Operators and if/else", "detail": ""}, {"date": "2026-08-20", "track": "Python", "topic": "Conditions and loops", "detail": ""}, {"date": "2026-08-21", "track": "CP", "topic": "Basic implementation problems", "detail": ""}, {"date": "2026-08-22", "track": "C", "topic": "Syntax, printf/scanf, variables, data types", "detail": ""}, {"date": "2026-08-23", "track": "Python", "topic": "for/while loops", "detail": ""}, {"date": "2026-08-24", "track": "C++", "topic": "Loops", "detail": ""}, {"date": "2026-08-25", "track": "Python", "topic": "Strings", "detail": ""}, {"date": "2026-08-26", "track": "C++", "topic": "Arrays and strings", "detail": ""}, {"date": "2026-08-27", "track": "Python", "topic": "Lists and tuples", "detail": ""}, {"date": "2026-08-28", "track": "CP", "topic": "Loops, arrays and strings practice", "detail": ""}, {"date": "2026-08-29", "track": "C", "topic": "Conditions and loops", "detail": ""}, {"date": "2026-08-30", "track": "Python", "topic": "Dictionaries and sets", "detail": ""}, {"date": "2026-08-31", "track": "C++", "topic": "Functions", "detail": ""}, {"date": "2026-09-01", "track": "Python", "topic": "Modules and packages", "detail": ""}, {"date": "2026-09-02", "track": "C++", "topic": "Arrays / 2D arrays / strings", "detail": ""}, {"date": "2026-09-03", "track": "Python", "topic": "OOP: classes and objects", "detail": ""}, {"date": "2026-09-04", "track": "CP", "topic": "Arrays and strings practice", "detail": ""}, {"date": "2026-09-05", "track": "C", "topic": "Arrays, strings and functions", "detail": ""}, {"date": "2026-09-06", "track": "Python", "topic": "Functions, parameters and return values", "detail": ""}, {"date": "2026-09-07", "track": "C++", "topic": "Functions and references", "detail": ""}, {"date": "2026-09-08", "track": "Python", "topic": "OOP: constructors and inheritance", "detail": ""}, {"date": "2026-09-09", "track": "C++", "topic": "References and pointers", "detail": ""}, {"date": "2026-09-10", "track": "Python", "topic": "Mini-project implementation", "detail": ""}, {"date": "2026-09-11", "track": "CP", "topic": "Timed implementation practice", "detail": ""}, {"date": "2026-09-12", "track": "C", "topic": "Pointers and memory", "detail": ""}, {"date": "2026-09-13", "track": "Python", "topic": "File handling and exceptions", "detail": ""}, {"date": "2026-09-14", "track": "C++", "topic": "Pointers introduction", "detail": ""}, {"date": "2026-09-15", "track": "Python", "topic": "Iterators/generators basics", "detail": ""}, {"date": "2026-09-16", "track": "C++", "topic": "Constructors and classes", "detail": ""}, {"date": "2026-09-17", "track": "Python", "topic": "Mini-project extension", "detail": ""}, {"date": "2026-09-18", "track": "CP", "topic": "Mixed beginner contest", "detail": ""}, {"date": "2026-09-19", "track": "C", "topic": "Structures and dynamic memory", "detail": ""}, {"date": "2026-09-20", "track": "Python", "topic": "Comprehensions and lambda", "detail": ""}, {"date": "2026-09-21", "track": "C++", "topic": "OOP basics", "detail": ""}, {"date": "2026-09-22", "track": "Python", "topic": "Problem solving", "detail": ""}, {"date": "2026-09-23", "track": "C++", "topic": "Problem solving", "detail": ""}, {"date": "2026-09-24", "track": "Research", "topic": "Read one AI/ML paper and write structured notes", "detail": ""}, {"date": "2026-09-25", "track": "CP", "topic": "Virtual contest + upsolve", "detail": ""}, {"date": "2026-09-26", "track": "C", "topic": "C revision and pointer practice", "detail": ""}, {"date": "2026-09-27", "track": "Python", "topic": "Revision + 5 problems", "detail": ""}, {"date": "2026-09-28", "track": "C++", "topic": "Revision + 5 problems", "detail": ""}, {"date": "2026-09-29", "track": "Python", "topic": "Problem solving", "detail": ""}, {"date": "2026-09-30", "track": "C++", "topic": "Problem solving", "detail": ""}, {"date": "2026-10-01", "track": "AI/ML", "topic": "NumPy vectorization and matrix operations", "detail": ""}, {"date": "2026-10-02", "track": "CP", "topic": "STL-based problems", "detail": ""}, {"date": "2026-10-03", "track": "C", "topic": "Pointer and memory revision", "detail": ""}, {"date": "2026-10-04", "track": "Python", "topic": "NumPy arrays and indexing", "detail": ""}, {"date": "2026-10-05", "track": "C++", "topic": "STL vector and pair", "detail": ""}, {"date": "2026-10-06", "track": "AI/ML", "topic": "NumPy slicing and broadcasting", "detail": ""}, {"date": "2026-10-07", "track": "C++", "topic": "stack, queue and deque", "detail": ""}, {"date": "2026-10-08", "track": "AI/ML", "topic": "Missing values and data cleaning", "detail": ""}, {"date": "2026-10-09", "track": "CP", "topic": "STL problem set", "detail": ""}, {"date": "2026-10-10", "track": "C++", "topic": "DSA arrays", "detail": ""}, {"date": "2026-10-11", "track": "Python", "topic": "Pandas Series and DataFrame", "detail": ""}, {"date": "2026-10-12", "track": "C++", "topic": "set and multiset", "detail": ""}, {"date": "2026-10-13", "track": "AI/ML", "topic": "Pandas CSV loading and filtering", "detail": ""}, {"date": "2026-10-14", "track": "C++", "topic": "map and unordered_map", "detail": ""}, {"date": "2026-10-15", "track": "AI/ML", "topic": "Exploratory Data Analysis project", "detail": ""}, {"date": "2026-10-16", "track": "CP", "topic": "Binary search problems", "detail": ""}, {"date": "2026-10-17", "track": "C++", "topic": "Big-O and complexity", "detail": ""}, {"date": "2026-10-18", "track": "Python", "topic": "Pandas groupby and merge", "detail": ""}, {"date": "2026-10-19", "track": "C++", "topic": "Sorting and custom comparator", "detail": ""}, {"date": "2026-10-20", "track": "AI/ML", "topic": "Matplotlib visualization", "detail": ""}, {"date": "2026-10-21", "track": "C++", "topic": "lower_bound, upper_bound, binary search", "detail": ""}, {"date": "2026-10-22", "track": "AI/ML", "topic": "Statistics for ML", "detail": ""}, {"date": "2026-10-23", "track": "CP", "topic": "Virtual contest + upsolve", "detail": ""}, {"date": "2026-10-24", "track": "C++", "topic": "DSA revision", "detail": ""}, {"date": "2026-10-25", "track": "Python", "topic": "Data-analysis mini-project", "detail": ""}, {"date": "2026-10-26", "track": "C++", "topic": "Prefix sums", "detail": ""}, {"date": "2026-10-27", "track": "AI/ML", "topic": "Linear algebra: vectors and matrices", "detail": ""}, {"date": "2026-10-28", "track": "C++", "topic": "Two pointers and sliding window", "detail": ""}, {"date": "2026-10-29", "track": "Research", "topic": "Dataset exploration and notes", "detail": ""}, {"date": "2026-10-30", "track": "CP", "topic": "Monthly assessment", "detail": ""}, {"date": "2026-10-31", "track": "C++", "topic": "Weak-topic revision", "detail": ""}, {"date": "2026-11-01", "track": "AI/ML", "topic": "ML workflow, supervised vs unsupervised", "detail": ""}, {"date": "2026-11-02", "track": "C++", "topic": "Recursion basics", "detail": ""}, {"date": "2026-11-03", "track": "AI/ML", "topic": "Train/validation/test splitting", "detail": ""}, {"date": "2026-11-04", "track": "C++", "topic": "Recursion and backtracking", "detail": ""}, {"date": "2026-11-05", "track": "AI/ML", "topic": "Linear Regression theory + implementation", "detail": ""}, {"date": "2026-11-06", "track": "CP", "topic": "Virtual contest", "detail": ""}, {"date": "2026-11-07", "track": "AI/ML", "topic": "Probability and statistics", "detail": ""}, {"date": "2026-11-08", "track": "Python", "topic": "scikit-learn basics", "detail": ""}, {"date": "2026-11-09", "track": "C++", "topic": "Greedy algorithms", "detail": ""}, {"date": "2026-11-10", "track": "AI/ML", "topic": "Logistic Regression", "detail": ""}, {"date": "2026-11-11", "track": "CP", "topic": "Greedy problems", "detail": ""}, {"date": "2026-11-12", "track": "AI/ML", "topic": "KNN + Naive Bayes", "detail": ""}, {"date": "2026-11-13", "track": "CP", "topic": "Greedy focused set", "detail": ""}, {"date": "2026-11-14", "track": "AI/ML", "topic": "ML revision and metrics", "detail": ""}, {"date": "2026-11-15", "track": "AI/ML", "topic": "Decision Tree", "detail": ""}, {"date": "2026-11-16", "track": "CP", "topic": "Number theory: GCD/LCM", "detail": ""}, {"date": "2026-11-17", "track": "AI/ML", "topic": "Random Forest", "detail": ""}, {"date": "2026-11-18", "track": "CP", "topic": "Prime, sieve, modular arithmetic", "detail": ""}, {"date": "2026-11-19", "track": "AI/ML", "topic": "SVM", "detail": ""}, {"date": "2026-11-20", "track": "CP", "topic": "Number theory set", "detail": ""}, {"date": "2026-11-21", "track": "Research", "topic": "ML mini-project", "detail": ""}, {"date": "2026-11-22", "track": "AI/ML", "topic": "Accuracy, Precision, Recall, F1", "detail": ""}, {"date": "2026-11-23", "track": "C++", "topic": "Linked-list concepts", "detail": ""}, {"date": "2026-11-24", "track": "AI/ML", "topic": "Confusion matrix + ROC-AUC", "detail": ""}, {"date": "2026-11-25", "track": "CP", "topic": "Stack/queue problems", "detail": ""}, {"date": "2026-11-26", "track": "AI/ML", "topic": "Cross-validation + hyperparameter tuning", "detail": ""}, {"date": "2026-11-27", "track": "CP", "topic": "Virtual contest + upsolve", "detail": ""}, {"date": "2026-11-28", "track": "Research", "topic": "ML experiment + result notes", "detail": ""}, {"date": "2026-11-29", "track": "AI/ML", "topic": "ML revision", "detail": ""}, {"date": "2026-11-30", "track": "C++", "topic": "DSA revision", "detail": ""}, {"date": "2026-12-01", "track": "AI/ML", "topic": "Perceptron and neurons", "detail": ""}, {"date": "2026-12-02", "track": "C++", "topic": "Tree traversal", "detail": ""}, {"date": "2026-12-03", "track": "AI/ML", "topic": "Gradient descent + backpropagation", "detail": ""}, {"date": "2026-12-04", "track": "CP", "topic": "Tree problems", "detail": ""}, {"date": "2026-12-05", "track": "AI/ML", "topic": "Implement a simple neural network", "detail": ""}, {"date": "2026-12-06", "track": "AI/ML", "topic": "Neural network fundamentals", "detail": ""}, {"date": "2026-12-07", "track": "C++", "topic": "Trees introduction", "detail": ""}, {"date": "2026-12-08", "track": "AI/ML", "topic": "Loss functions", "detail": ""}, {"date": "2026-12-09", "track": "CP", "topic": "Tree traversal practice", "detail": ""}, {"date": "2026-12-10", "track": "AI/ML", "topic": "Optimization, gradients and parameter updates", "detail": ""}, {"date": "2026-12-11", "track": "CP", "topic": "Virtual contest", "detail": ""}, {"date": "2026-12-12", "track": "AI/ML", "topic": "Neural-network revision", "detail": ""}, {"date": "2026-12-13", "track": "AI/ML", "topic": "Activation functions", "detail": ""}, {"date": "2026-12-14", "track": "C++", "topic": "Binary trees", "detail": ""}, {"date": "2026-12-15", "track": "AI/ML", "topic": "Dataset and DataLoader", "detail": ""}, {"date": "2026-12-16", "track": "CP", "topic": "BFS/DFS implementation", "detail": ""}, {"date": "2026-12-17", "track": "AI/ML", "topic": "PyTorch model + training loop", "detail": ""}, {"date": "2026-12-18", "track": "CP", "topic": "Graph problems", "detail": ""}, {"date": "2026-12-19", "track": "Research", "topic": "PyTorch experiment", "detail": ""}, {"date": "2026-12-20", "track": "AI/ML", "topic": "PyTorch tensors", "detail": ""}, {"date": "2026-12-21", "track": "CP", "topic": "BFS/DFS introduction", "detail": ""}, {"date": "2026-12-22", "track": "AI/ML", "topic": "Convolution and pooling", "detail": ""}, {"date": "2026-12-23", "track": "CP", "topic": "Dijkstra basics", "detail": ""}, {"date": "2026-12-24", "track": "AI/ML", "topic": "CNN implementation in PyTorch", "detail": ""}, {"date": "2026-12-25", "track": "CP", "topic": "Graph practice", "detail": ""}, {"date": "2026-12-26", "track": "AI/ML", "topic": "Transfer learning", "detail": ""}, {"date": "2026-12-27", "track": "AI/ML", "topic": "CNN theory", "detail": ""}, {"date": "2026-12-28", "track": "CP", "topic": "Shortest path introduction", "detail": ""}, {"date": "2026-12-29", "track": "Research", "topic": "Model evaluation + statistical testing", "detail": ""}, {"date": "2026-12-30", "track": "CP", "topic": "2-hour assessment contest", "detail": ""}, {"date": "2026-12-31", "track": "Research", "topic": "Final AI/ML research project", "detail": ""}];

const ROUTINES = {
  0:[["6:30–8:00 AM","Academic Study (1.5h)"],["8:30 AM–5:30 PM","University"],["Free gap","Competitive Programming (30m)"],["6:00–8:00 PM","Samia"],["8:00–9:00 PM","Tunaj"],["9:00–10:30 PM","Chahat"],["10:30–11:00 PM","Academic Revision"],["11:15 PM","Sleep"]],
  1:[["6:30–8:00 AM","Academic Study (1.5h)"],["8:30 AM–5:30 PM","University"],["Free gap","Competitive Programming (30m)"],["5:40–7:40 PM","Coaching"],["8:00–9:30 PM","Tarannum"],["9:30–10:30 PM","Zidan"],["10:30–11:00 PM","Academic Revision"],["11:15 PM","Sleep"]],
  2:[["6:30–8:00 AM","Academic Study (1.5h)"],["8:30 AM–5:30 PM","University"],["Free gap","Competitive Programming (30m)"],["Free gap","Paper reading (20–30m if possible)"],["6:00–8:00 PM","Samia"],["8:00–9:00 PM","Tunaj"],["9:00–10:30 PM","Chahat"],["10:30–11:00 PM","Academic Revision"],["11:15 PM","Sleep"]],
  3:[["6:30–8:00 AM","Academic Study (1.5h)"],["8:30 AM–5:30 PM","University"],["Free gap","Competitive Programming (30m)"],["5:40–7:40 PM","Coaching"],["8:00–9:30 PM","Tarannum"],["9:30–10:30 PM","Zidan"],["10:30–11:00 PM","Academic Revision"],["11:15 PM","Sleep"]],
  4:[["7:30–9:30 AM","Academic Study (2h)"],["10:00 AM–12:00 PM","AI / ML"],["1:00–3:00 PM","Research"],["3:30–5:00 PM","Python / C / C++"],["5:00–6:00 PM","YouTube"],["Flexible","CP topic session (1.5–2h)"],["Evening","Tutoring as required"],["11:15 PM","Sleep"]],
  5:[["7:30–9:30 AM","Academic Study (2h)"],["10:00 AM–12:00 PM","CP Virtual Contest"],["1:00–3:00 PM","Research"],["3:30–5:00 PM","YouTube"],["5:00–6:00 PM","Python / C / C++"],["Extra","CP Upsolving 30–45m"],["10:30–11:00 PM","Weekly Review"],["11:15 PM","Sleep"]],
  6:[["6:30–8:00 AM","Academic Study (1.5h)"],["8:30 AM–5:30 PM","University"],["Free gap","Competitive Programming (30m)"],["5:40–7:40 PM","Coaching"],["8:00–9:30 PM","Tarannum"],["9:30–10:30 PM","Zidan"],["10:30–11:00 PM","Academic Revision"],["11:15 PM","Sleep"]]
};

const $=id=>document.getElementById(id);
const now=new Date(), todayISO=localISO(now);
let currentUser=null, realtimeChannel=null;
let cache={roadmap:[],habits:[],notes:[],cp:[],research:[],youtube:[],profile:[]};

function localISO(d){ const x=new Date(d.getTime()-d.getTimezoneOffset()*60000); return x.toISOString().slice(0,10); }
function fmtDate(s){return new Date(s+"T00:00:00").toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric"});}
function toast(msg){$("toast").textContent=msg;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),2400)}
function syncState(text,busy=false){$("syncState").textContent=(busy?"◌ ":"● ")+text;$("syncState").classList.toggle("syncing",busy)}

function showAuth(msg=""){
  $("authScreen").classList.remove("hidden");$("appShell").classList.add("hidden");$("authMsg").textContent=msg;
}
function showApp(){
  $("authScreen").classList.add("hidden");$("appShell").classList.remove("hidden");
  $("userEmail").textContent=currentUser?.email||"";
}

async function loadAll(){
  if(!currentUser)return;
  syncState("Syncing",true);
  const {data,error}=await supabase.from("user_records").select("*").eq("user_id",currentUser.id);
  if(error){syncState("Sync error",true);throw error;}
  cache={roadmap:[],habits:[],notes:[],cp:[],research:[],youtube:[],profile:[]};
  for(const r of data||[]) if(cache[r.collection]) cache[r.collection].push({...r.data,_key:r.record_key,_id:r.id,_updated:r.updated_at});
  await seedRoadmapIfNeeded();
  syncState("Synced");
  renderAll();
}

async function seedRoadmapIfNeeded(){
  if(cache.roadmap.length)return;
  const rows=ROADMAP.map(r=>({
    user_id:currentUser.id,collection:"roadmap",record_key:r.date,
    data:{...r,done:false}
  }));
  const {error}=await supabase.from("user_records").insert(rows);
  if(error) throw error;
  cache.roadmap=ROADMAP.map(r=>({...r,done:false,_key:r.date}));
}

async function upsertRecord(collection,key,data){
  syncState("Saving",true);
  const {error}=await supabase.from("user_records").upsert({
    user_id:currentUser.id,collection,record_key:String(key),data
  },{onConflict:"user_id,collection,record_key"});
  if(error){syncState("Sync error",true);toast(error.message);throw error;}
  const arr=cache[collection], i=arr.findIndex(x=>x._key===String(key));
  const item={...data,_key:String(key)};
  if(i>=0)arr[i]=item;else arr.push(item);
  syncState("Synced");
}

async function insertRecord(collection,data){
  const key=crypto.randomUUID();
  await upsertRecord(collection,key,data);
  return key;
}

function getOne(collection,key){return cache[collection].find(x=>x._key===String(key));}

function setupRealtime(){
  if(realtimeChannel)supabase.removeChannel(realtimeChannel);
  realtimeChannel=supabase.channel(`growthos-${currentUser.id}`)
    .on("postgres_changes",{event:"*",schema:"public",table:"user_records",filter:`user_id=eq.${currentUser.id}`},async()=>{
      await loadAll();
    }).subscribe();
}

function switchView(name){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(v=>v.classList.remove("active"));
  $(name).classList.add("active");
  document.querySelector(`.nav-btn[data-view="${name}"]`)?.classList.add("active");
  $("pageTitle").textContent={dashboard:"Dashboard",calendar:"Learning Roadmap",tracker:"Daily Tracker",cp:"Competitive Programming",research:"Research Log",youtube:"YouTube Planner",analytics:"Analytics",account:"Account"}[name]||"GrowthOS";
  renderAll();
}

async function initSession(){
  const {data:{session}}=await supabase.auth.getSession();
  if(session){currentUser=session.user;showApp();setupRealtime();await loadAll();}
  else showAuth();
  supabase.auth.onAuthStateChange(async(event,session)=>{
    if(event==="PASSWORD_RECOVERY"){
      const p=prompt("Enter your new password (minimum 8 characters):");
      if(p && p.length>=8){const {error}=await supabase.auth.updateUser({password:p});toast(error?error.message:"Password updated");}
    }
    if(session?.user && (!currentUser || currentUser.id!==session.user.id)){
      currentUser=session.user;showApp();setupRealtime();await loadAll();
    }
    if(!session && currentUser){currentUser=null;showAuth();}
  });
}

function authTab(mode){
  $("loginTab").classList.toggle("active",mode==="login");$("signupTab").classList.toggle("active",mode==="signup");
  $("loginForm").classList.toggle("hidden",mode!=="login");$("signupForm").classList.toggle("hidden",mode!=="signup");$("authMsg").textContent="";
}

async function renderDashboard(){
  const roadmap=[...cache.roadmap].sort((a,b)=>a.date.localeCompare(b.date));
  const t=roadmap.find(x=>x.date===todayISO)||roadmap.find(x=>x.date>todayISO)||roadmap.at(-1);
  $("todayMissionTitle").textContent=t?`${t.track}: ${t.topic}`:"Roadmap complete";
  $("todayMissionDesc").textContent=t?`Scheduled for ${fmtDate(t.date)}. Learn it, code it yourself, then record one mistake or insight.`:"";
  const pct=roadmap.length?Math.round(roadmap.filter(x=>x.done).length/roadmap.length*100):0;
  $("overallPct").textContent=pct+"%";$("overallRing").style.setProperty("--p",pct);
  $("cpStat").textContent=cache.cp.reduce((s,x)=>s+(Number(x.problems)||0),0);
  $("researchStat").textContent=cache.research.length;$("youtubeStat").textContent=cache.youtube.length;
  $("streakStat").textContent=calcStreak()+" days";
  $("todayRoutine").innerHTML=(ROUTINES[now.getDay()]||[]).map(([time,task])=>`<div class="routine-item"><div><div class="time">${time}</div><small>${task}</small></div></div>`).join("");
  const tracks=["Python","C","C++","AI/ML","CP","Research"];
  $("skillProgress").innerHTML=tracks.map(tr=>{const a=roadmap.filter(x=>x.track===tr),p=a.length?Math.round(a.filter(x=>x.done).length/a.length*100):0;return `<div class="skill-row"><div class="row-head"><span>${tr}</span><span>${p}%</span></div><div class="mini-bar"><span style="width:${p}%"></span></div></div>`}).join("");
  $("upcomingDays").innerHTML=roadmap.filter(x=>x.date>=todayISO).slice(0,7).map(x=>`<div class="upcoming-card"><div class="date">${fmtDate(x.date)}</div><div class="topic"><b>${x.track}</b><br>${x.topic}</div></div>`).join("");
}
function calcStreak(){
  const m=new Map(cache.habits.map(x=>[x.date,x]));let streak=0,d=new Date();
  while(true){const h=m.get(localISO(d));if(h&&h.completion>=70){streak++;d.setDate(d.getDate()-1)}else break}return streak;
}
function renderRoadmap(){
  let data=[...cache.roadmap].sort((a,b)=>a.date.localeCompare(b.date));
  const mf=$("monthFilter").value,tf=$("trackFilter").value;
  if(mf!=="all")data=data.filter(x=>x.date.slice(0,7)===mf);if(tf!=="all")data=data.filter(x=>x.track===tf);
  $("roadmapList").innerHTML=data.map(x=>`<div class="roadmap-item ${x.done?"done":""}"><div class="roadmap-date">${fmtDate(x.date)}</div><div><span class="track-chip">${x.track}</span></div><div><b>${x.topic}</b></div><button data-roadmap="${x.date}">${x.done?"Undo":"Complete"}</button></div>`).join("");
  document.querySelectorAll("[data-roadmap]").forEach(b=>b.onclick=async()=>{const x=getOne("roadmap",b.dataset.roadmap);await upsertRecord("roadmap",x.date,{date:x.date,track:x.track,topic:x.topic,detail:x.detail||"",done:!x.done});renderAll();});
}
function habits(){return["2 hours academic study","Daily competitive programming","Python / C / C++ / AI-ML roadmap task","Research task or paper reading","YouTube task when scheduled","7–8 hours sleep"]}
function renderTracker(){
  $("trackerDate").textContent=fmtDate(todayISO);const h=getOne("habits",todayISO);
  const arr=h?.items||habits().map(text=>({text,done:false}));
  $("habitList").innerHTML=arr.map((x,i)=>`<label class="check-item"><span>${x.text}</span><input type="checkbox" data-habit="${i}" ${x.done?"checked":""}></label>`).join("");
  $("dailyNotes").value=getOne("notes",todayISO)?.text||"";
}
function renderCp(){
  const data=[...cache.cp].sort((a,b)=>b.date.localeCompare(a.date)),probs=data.reduce((s,x)=>s+(Number(x.problems)||0),0),mins=data.reduce((s,x)=>s+(Number(x.duration)||0),0);
  $("cpSummary").innerHTML=`<div class="summary-box"><small>Total Problems</small><strong>${probs}</strong></div><div class="summary-box"><small>Total Hours</small><strong>${(mins/60).toFixed(1)}</strong></div><div class="summary-box"><small>Sessions</small><strong>${data.length}</strong></div><div class="summary-box"><small>Avg Problems</small><strong>${data.length?(probs/data.length).toFixed(1):0}</strong></div>`;
  $("cpHistory").innerHTML=data.length?`<table><thead><tr><th>Date</th><th>Platform</th><th>Problems</th><th>Minutes</th><th>Topic</th><th>Notes</th></tr></thead><tbody>${data.map(x=>`<tr><td>${fmtDate(x.date)}</td><td>${x.platform||"-"}</td><td>${x.problems||0}</td><td>${x.duration||0}</td><td>${x.topic||"-"}</td><td>${x.notes||"-"}</td></tr>`).join("")}</tbody></table>`:"<p class='muted'>No CP sessions yet.</p>";
}
function renderResearch(){
  const data=[...cache.research].sort((a,b)=>b.date.localeCompare(a.date));
  $("researchHistory").innerHTML=data.length?`<table><thead><tr><th>Date</th><th>Type</th><th>Paper / Work</th><th>Minutes</th><th>Notes</th></tr></thead><tbody>${data.map(x=>`<tr><td>${fmtDate(x.date)}</td><td>${x.type}</td><td>${x.paper||"-"}</td><td>${x.duration||0}</td><td>${x.notes||"-"}</td></tr>`).join("")}</tbody></table>`:"<p class='muted'>No research sessions yet.</p>";
}
function renderYoutube(){
  const st=["Idea","Script","Recorded","Editing","Scheduled","Published"];
  $("youtubeBoard").innerHTML=st.map(s=>`<div class="kanban-col"><h4>${s}</h4>${cache.youtube.filter(x=>x.status===s).map(x=>`<div class="yt-card"><b>${x.title||"Untitled"}</b><small>${fmtDate(x.date)}<br>${x.notes||""}</small></div>`).join("")}</div>`).join("");
}
function renderAnalytics(){
  const r=cache.roadmap,p=r.length?Math.round(r.filter(x=>x.done).length/r.length*100):0;
  $("anaRoadmap").textContent=p+"%";$("anaHabits").textContent=cache.habits.length?Math.round(cache.habits.reduce((s,x)=>s+(x.completion||0),0)/cache.habits.length)+"%":"0%";
  $("anaResearch").textContent=cache.research.reduce((s,x)=>s+(Number(x.duration)||0),0);$("anaCp").textContent=cache.cp.reduce((s,x)=>s+(Number(x.duration)||0),0);
  $("trackAnalytics").innerHTML=["Python","C","C++","AI/ML","CP","Research"].map(tr=>{const a=r.filter(x=>x.track===tr),q=a.length?Math.round(a.filter(x=>x.done).length/a.length*100):0;return `<div class="skill-row"><div class="row-head"><span>${tr}</span><span>${q}%</span></div><div class="mini-bar"><span style="width:${q}%"></span></div></div>`}).join("");
  const recent=[...cache.cp.map(x=>({d:x.date,t:`CP: ${x.problems||0} problems • ${x.topic||"practice"}`})),...cache.research.map(x=>({d:x.date,t:`Research: ${x.type} • ${x.paper||"session"}`}))].sort((a,b)=>b.d.localeCompare(a.d)).slice(0,10);
  $("recentActivity").innerHTML=recent.length?recent.map(x=>`<div class="activity-item"><b>${fmtDate(x.d)}</b><div class="muted">${x.t}</div></div>`).join(""):"<p class='muted'>No activity yet.</p>";
}
function renderAccount(){
  $("accountName").value=getOne("profile","main")?.name||currentUser?.user_metadata?.name||"";
}
function renderAll(){if(!currentUser)return;renderDashboard();renderRoadmap();renderTracker();renderCp();renderResearch();renderYoutube();renderAnalytics();renderAccount()}

document.addEventListener("DOMContentLoaded",async()=>{
  $("todayText").textContent=now.toLocaleDateString(undefined,{weekday:"long",year:"numeric",month:"long",day:"numeric"});
  ["cpDate","resDate","ytDate"].forEach(id=>$(id).value=todayISO);
  const months=[...new Set(ROADMAP.map(x=>x.date.slice(0,7)))];
  $("monthFilter").innerHTML='<option value="all">All months</option>'+months.map(m=>`<option value="${m}">${new Date(m+"-01T00:00:00").toLocaleDateString(undefined,{month:"long",year:"numeric"})}</option>`).join("");

  $("loginTab").onclick=()=>authTab("login");$("signupTab").onclick=()=>authTab("signup");
  $("loginForm").onsubmit=async e=>{e.preventDefault();$("authMsg").textContent="Logging in…";const {error}=await supabase.auth.signInWithPassword({email:$("loginEmail").value,password:$("loginPassword").value});$("authMsg").textContent=error?error.message:"";};
  $("signupForm").onsubmit=async e=>{e.preventDefault();$("authMsg").textContent="Creating account…";const {data,error}=await supabase.auth.signUp({email:$("signupEmail").value,password:$("signupPassword").value,options:{data:{name:$("signupName").value},emailRedirectTo:location.origin}});$("authMsg").textContent=error?error.message:(data.session?"Account created.":"Account created. Check your email if confirmation is enabled.");};
  $("forgotBtn").onclick=async()=>{const email=$("loginEmail").value||prompt("Enter your account email:");if(!email)return;const {error}=await supabase.auth.resetPasswordForEmail(email,{redirectTo:location.origin});$("authMsg").textContent=error?error.message:"Password-reset email sent.";};

  document.querySelectorAll(".nav-btn").forEach(b=>b.onclick=()=>switchView(b.dataset.view));
  $("logoutBtn").onclick=()=>supabase.auth.signOut();
  $("openRoadmapBtn").onclick=()=>switchView("calendar");
  $("markTodayBtn").onclick=async()=>{const x=getOne("roadmap",todayISO);if(!x)return toast("Today is outside the roadmap.");await upsertRecord("roadmap",todayISO,{...x,done:true,_key:undefined,_id:undefined});renderAll()};
  $("monthFilter").onchange=renderRoadmap;$("trackFilter").onchange=renderRoadmap;

  $("saveHabitsBtn").onclick=async()=>{const boxes=[...document.querySelectorAll("[data-habit]")],items=habits().map((text,i)=>({text,done:boxes[i]?.checked||false})),completion=Math.round(items.filter(x=>x.done).length/items.length*100);await upsertRecord("habits",todayISO,{date:todayISO,items,completion});toast("Habits synced");renderAll()};
  $("saveNotesBtn").onclick=async()=>{await upsertRecord("notes",todayISO,{date:todayISO,text:$("dailyNotes").value});toast("Notes synced")};

  $("addCpBtn").onclick=async()=>{await insertRecord("cp",{date:$("cpDate").value||todayISO,platform:$("cpPlatform").value,problems:Number($("cpProblems").value)||0,duration:Number($("cpDuration").value)||0,topic:$("cpTopic").value,rating:$("cpRating").value,notes:$("cpNotes").value});["cpPlatform","cpProblems","cpDuration","cpTopic","cpRating","cpNotes"].forEach(id=>$(id).value="");toast("CP session synced");renderAll()};
  $("addResearchBtn").onclick=async()=>{await insertRecord("research",{date:$("resDate").value||todayISO,paper:$("resPaper").value,duration:Number($("resDuration").value)||0,type:$("resType").value,notes:$("resNotes").value});["resPaper","resDuration","resNotes"].forEach(id=>$(id).value="");toast("Research session synced");renderAll()};
  $("addYtBtn").onclick=async()=>{await insertRecord("youtube",{date:$("ytDate").value||todayISO,title:$("ytTitle").value,status:$("ytStatus").value,notes:$("ytNotes").value});["ytTitle","ytNotes"].forEach(id=>$(id).value="");toast("YouTube task synced");renderAll()};

  $("saveNameBtn").onclick=async()=>{const name=$("accountName").value.trim();const {error}=await supabase.auth.updateUser({data:{name}});if(error)return toast(error.message);await upsertRecord("profile","main",{name});toast("Profile updated")};
  $("changePasswordBtn").onclick=async()=>{const p=$("newPassword").value;if(p.length<8)return toast("Use at least 8 characters.");const {error}=await supabase.auth.updateUser({password:p});toast(error?error.message:"Password changed");if(!error)$("newPassword").value=""};
  $("manualSyncBtn").onclick=()=>loadAll();
  $("exportBtn").onclick=()=>{const blob=new Blob([JSON.stringify(cache,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`growthos-cloud-backup-${todayISO}.json`;a.click();URL.revokeObjectURL(a.href)};

  await initSession();
});
