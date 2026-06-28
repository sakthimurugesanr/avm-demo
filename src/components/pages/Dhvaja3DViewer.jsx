// import React, { useEffect, useRef, useState, useCallback, useMemo, memo } from 'react'
// import '@google/model-viewer'

// import ModelA from '../../assets/model/Model_1781347389454.glb'
// import ModelB from '../../assets/model/Model_1781348981783.glb'
// import ModelC from '../../assets/model/Model_1781350044496.glb'
// import ModelD from '../../assets/model/Model_1781350527211.glb'
// import ModelE from '../../assets/model/Model_1781351034104.glb'
// import ModelF from '../../assets/model/Model_1781353734549.glb'

// const models = [
//   { url: ModelA, id: 'M-001', label: 'Model 1781347389454' },
//   { url: ModelB, id: 'M-002', label: 'Model 1781348981783' },
//   { url: ModelC, id: 'M-003', label: 'Model 1781350044496' },
//   { url: ModelD, id: 'M-004', label: 'Model 1781350527211' },
//   { url: ModelE, id: 'M-005', label: 'Model 1781351034104' },
//   { url: ModelF, id: 'M-006', label: 'Model 1781353734549' },
// ]

// const ModelCard = memo(({ model, layout, idx }) => {
//   const ref = useRef(null)
//   const [loading, setLoading] = useState(true)
//   const [rk, setRk] = useState(0)

//   useEffect(() => {
//     const viewer = ref.current
//     if (!viewer) return

//     const onProgress = (e) => {
//       if (e?.detail?.totalProgress === 1) {
//         setLoading(false)
//       }
//     }

//     const onWheel = (e) => e.stopPropagation()

//     viewer.addEventListener('progress', onProgress)
//     viewer.addEventListener('wheel', onWheel, { passive: true })

//     return () => {
//       viewer.removeEventListener('progress', onProgress)
//       viewer.removeEventListener('wheel', onWheel)
//     }
//   }, [rk])

//   const reset = useCallback(() => {
//     setLoading(true)
//     setRk((k) => k + 1)
//   }, [])

//   const isList = layout === 'list'

//   return (
//     <div
//       className={`group bg-[#0a0e1a] border border-[#131929] rounded-2xl overflow-hidden flex transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1e3a5f] ${
//         isList ? 'flex-row' : 'flex-col'
//       }`}
//       style={{ animationDelay: `${idx * 60}ms` }}
//     >
//       <div
//         className={`relative bg-[#060810] shrink-0 ${isList ? 'w-[280px] h-[220px]' : 'w-full'}`}
//         style={isList ? undefined : { paddingBottom: '100%' }}
//       >
//         <div className="absolute inset-0">
//           <span className="absolute top-2.5 left-2.5 z-10 bg-black/70 border border-[#1e293b] rounded-md px-2 py-0.5 text-[10px] font-bold text-amber-400 tracking-wide backdrop-blur-sm">
//             {model.id}
//           </span>

//           {loading && (
//             <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#060810] gap-2.5">
//               <div className="w-7 h-7 rounded-full border-2 border-[#1e293b] border-t-amber-400 animate-spin" />
//               <p className="text-[11px] text-slate-500">Loading…</p>
//             </div>
//           )}

//           <model-viewer
//             key={rk}
//             ref={ref}
//             src={model.url}
//             alt={model.label}
//             auto-rotate
//             camera-controls
//             interaction-prompt="auto"
//             shadow-intensity="1.2"
//             shadow-softness="0.7"
//             exposure="1.15"
//             environment-image="neutral"
//             style={{
//               width: '100%',
//               height: '100%',
//               display: 'block',
//               outline: 'none',
//               backgroundColor: 'transparent',
//               touchAction: 'none',
//             }}
//           />
//         </div>
//       </div>

//       <div className="flex items-center justify-between gap-2 px-3.5 py-3 border-t border-[#0d1220] shrink-0">
//         <div className="min-w-0">
//           <p className="text-[13px] font-bold text-slate-400">{model.id}</p>
//           <p className="text-[10px] text-[#334155] truncate font-mono">{model.label}</p>
//         </div>
//         <button
//           onClick={reset}
//           type="button"
//           title="Reset view"
//           className="w-7 h-7 flex items-center justify-center rounded-lg border border-[#1e293b] bg-[#0f172a] text-slate-500 text-sm hover:bg-[#1e293b] hover:text-slate-200 transition-colors"
//         >
//           ↺
//         </button>
//       </div>
//     </div>
//   )
// })

// const Dhvaja3DViewer = () => {
//   const [layout, setLayout] = useState('grid3')

//   const gridClass = useMemo(
//     () => ({
//       grid3: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4',
//       grid2: 'grid grid-cols-1 sm:grid-cols-2 gap-4',
//       list: 'flex flex-col gap-4',
//     }[layout]),
//     [layout]
//   )

//   const layoutBtnClass = useCallback(
//     (name) =>
//       `px-3 py-1.5 rounded-md border text-xs font-semibold cursor-pointer transition-all duration-150 ${
//         layout === name
//           ? 'bg-[#0f172a] text-slate-200 border-[#334155]'
//           : 'bg-transparent text-slate-500 border-[#1e293b] hover:bg-[#0f172a] hover:text-slate-300 hover:border-[#334155]'
//       }`,
//     [layout]
//   )

//   return (
//     <div className="full-width-section w-full min-h-screen bg-[#07090f] text-slate-200 pb-12 font-sans">
//       <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-8 lg:px-12 pt-6 pb-4">
//         <div className="flex gap-1.5 flex-wrap">
//           <button className={layoutBtnClass('grid3')} onClick={() => setLayout('grid3')}>
//             ⊞ 3×
//           </button>
//           <button className={layoutBtnClass('grid2')} onClick={() => setLayout('grid2')}>
//             ⊟ 2×
//           </button>
//           <button className={layoutBtnClass('list')} onClick={() => setLayout('list')}>
//             ☰ List
//           </button>
//         </div>
//       </div>

//       <div className={`px-4 sm:px-8 lg:px-12 ${gridClass}`}>
//         {models.map((m, i) => (
//           <ModelCard key={m.url} model={m} layout={layout} idx={i} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default memo(Dhvaja3DViewer)
// import React, { useEffect, useRef, useState } from 'react';
// import '@google/model-viewer';


// const BASE = 'https://raw.githubusercontent.com/sakthimurugesanr/avm-models/main/models';

// const models = [
//   { url: `${BASE}/Model_1781347389454.glb`, id: 'M-001', label: 'Model 1781347389454' },
//   { url: `${BASE}/Model_1781348981783.glb`, id: 'M-002', label: 'Model 1781348981783' },
//   { url: `${BASE}/Model_1781350044496.glb`, id: 'M-003', label: 'Model 1781350044496' },
//   { url: `${BASE}/Model_1781350527211.glb`, id: 'M-004', label: 'Model 1781350527211' },
//   { url: `${BASE}/Model_1781351034104.glb`, id: 'M-005', label: 'Model 1781351034104' },
//   { url: `${BASE}/Model_1781353734549.glb`, id: 'M-006', label: 'Model 1781353734549' },
// ];

// /* ─── Shimmer keyframe ───────────────────────────────────────── */
// const SKELETON_STYLE = `
//   @keyframes shimmer {
//     0%   { background-position: -600px 0; }
//     100% { background-position:  600px 0; }
//   }
//   .sk-shimmer {
//     background: linear-gradient(
//       90deg,
//       #0d1220 0%,
//       #1a2540 40%,
//       #243050 50%,
//       #1a2540 60%,
//       #0d1220 100%
//     );
//     background-size: 600px 100%;
//     animation: shimmer 1.6s ease-in-out infinite;
//   }
// `;

// /* ─── Skeleton card ──────────────────────────────────────────── */
// const SkeletonCard = ({ isList }) => (
//   <div
//     className={`bg-[#0a0e1a] border border-[#131929] rounded-2xl overflow-hidden flex ${isList ? 'flex-row' : 'flex-col'}`}
//   >
//     <div
//       className={`sk-shimmer flex-shrink-0 ${isList ? 'w-[280px] h-[220px]' : 'w-full'}`}
//       style={isList ? {} : { paddingBottom: '100%' }}
//     />
//     <div className="flex items-center justify-between gap-3 px-3.5 py-3 border-t border-[#0d1220] flex-shrink-0">
//       <div className="flex flex-col gap-1.5 flex-1 min-w-0">
//         <div className="sk-shimmer h-3 w-12 rounded-md" />
//         <div className="sk-shimmer h-2.5 w-32 rounded-md" />
//       </div>
//       <div className="sk-shimmer w-7 h-7 rounded-lg flex-shrink-0" />
//     </div>
//   </div>
// );

// /* ─── Individual card ────────────────────────────────────────── */
// const ModelCard = ({ model, layout, idx }) => {
//   const containerRef = useRef(null);
//   const [loading, setLoading] = useState(true);
//   const [rk, setRk] = useState(0);
//   const isList = layout === 'list';

//   useEffect(() => {
//     // Reset to skeleton on every remount / reset
//     setLoading(true);

//     // Wait for model-viewer custom element to be ready in DOM
//     const timer = setTimeout(() => {
//       const v = containerRef.current?.querySelector('model-viewer');
//       if (!v) return;

//       // ✅ 'load' fires once the model is fully parsed and rendered
//       const onLoad = () => setLoading(false);

//       // ✅ 'error' fires if the GLB fails — hide skeleton so we don't hang forever
//       const onError = () => setLoading(false);

//       // ✅ wheel prevention
//       const onWheel = (e) => e.stopPropagation();

//       v.addEventListener('load', onLoad);
//       v.addEventListener('error', onError);
//       v.addEventListener('wheel', onWheel, { passive: true });

//       // ✅ If already loaded (cached), fire immediately
//       if (v.loaded) setLoading(false);

//       return () => {
//         v.removeEventListener('load', onLoad);
//         v.removeEventListener('error', onError);
//         v.removeEventListener('wheel', onWheel);
//       };
//     }, 50); // tiny delay so model-viewer mounts first

//     return () => clearTimeout(timer);
//   }, [rk]);

//   const reset = () => {
//     setLoading(true);
//     setRk(k => k + 1);
//   };

//   return (
//     <div ref={containerRef} className="relative">

//       {/* Skeleton — sits on top while loading */}
//       {loading && (
//         <div className="absolute inset-0 z-10 rounded-2xl overflow-hidden">
//           <SkeletonCard isList={isList} />
//         </div>
//       )}

//       {/* Real card — always mounted so model-viewer can load in background */}
//       <div
//         className={`
//           group bg-[#0a0e1a] border border-[#131929] rounded-2xl overflow-hidden
//           flex transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1e3a5f]
//           ${isList ? 'flex-row' : 'flex-col'}
//         `}
//         style={{ animationDelay: `${idx * 60}ms` }}
//       >
//         {/* Viewer wrapper */}
//         <div
//           className={`relative bg-[#060810] flex-shrink-0 ${isList ? 'w-[280px] h-[220px]' : 'w-full'}`}
//           style={isList ? {} : { paddingBottom: '100%' }}
//         >
//           <div className="absolute inset-0">

//             {/* Corner ID badge — only show when loaded */}
//             {!loading && (
//               <span className="absolute top-2.5 left-2.5 z-10 bg-black/70 border border-[#1e293b] rounded-md px-2 py-0.5 text-[10px] font-bold text-amber-400 tracking-wide backdrop-blur-sm">
//                 {model.id}
//               </span>
//             )}

//             <model-viewer
//               key={rk}
//               src={model.url}
//               alt={model.label}
//               auto-rotate
//               camera-controls
//               interaction-prompt="auto"
//               shadow-intensity="1.2"
//               shadow-softness="0.7"
//               exposure="1.15"
//               environment-image="neutral"
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 display: 'block',
//                 outline: 'none',
//                 backgroundColor: 'transparent',
//                 touchAction: 'none',
//                 // ✅ Hide the viewer visually until loaded — but keep it mounted so it loads
//                 opacity: loading ? 0 : 1,
//                 transition: 'opacity 0.4s ease',
//               }}
//             />
//           </div>
//         </div>

//         {/* Card footer */}
//         <div className="flex items-center justify-between gap-2 px-3.5 py-3 border-t border-[#0d1220] flex-shrink-0">
//           <div className="min-w-0">
//             <p className="text-[13px] font-bold text-slate-400">{model.id}</p>
//             <p className="text-[10px] text-[#334155] truncate font-mono">{model.label}</p>
//           </div>
//           <button
//             onClick={reset}
//             title="Reset view"
//             className="w-7 h-7 flex items-center justify-center rounded-lg border border-[#1e293b] bg-[#0f172a] text-slate-500 text-sm hover:bg-[#1e293b] hover:text-slate-200 transition-colors cursor-pointer"
//           >
//             ↺
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ─── Main component ─────────────────────────────────────────── */
// const Dhvaja3DViewer = () => {
//   const [layout, setLayout] = useState('grid3');

//   const layoutBtnClass = (name) =>
//     `px-3 py-1.5 rounded-md border text-xs font-semibold cursor-pointer transition-all duration-150
//     ${layout === name
//       ? 'bg-[#0f172a] text-slate-200 border-[#334155]'
//       : 'bg-transparent text-slate-500 border-[#1e293b] hover:bg-[#0f172a] hover:text-slate-300 hover:border-[#334155]'
//     }`;

//   const gridClass = {
//     grid3: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4',
//     grid2: 'grid grid-cols-1 sm:grid-cols-2 gap-4',
//     list:  'flex flex-col gap-4',
//   }[layout];

//   return (
//     <>
//       <style>{SKELETON_STYLE}</style>

//       <div className="full-width-section w-full min-h-screen bg-[#07090f] text-slate-200 pb-12 font-sans">

//         {/* Layout switcher */}
//         <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-8 lg:px-12 pt-6 pb-4">
//           <div className="flex gap-1.5 flex-wrap">
//             <button className={layoutBtnClass('grid3')} onClick={() => setLayout('grid3')}>⊞ 3×</button>
//             <button className={layoutBtnClass('grid2')} onClick={() => setLayout('grid2')}>⊟ 2×</button>
//             <button className={layoutBtnClass('list')}  onClick={() => setLayout('list')}>☰ List</button>
//           </div>
//         </div>

//         {/* Grid */}
//         <div className={`px-4 sm:px-8 lg:px-12 ${gridClass}`}>
//           {models.map((m, i) => (
//             <ModelCard key={m.url} model={m} layout={layout} idx={i} />
//           ))}
//         </div>

//       </div>
//     </>
//   );
// };

// export default Dhvaja3DViewer;

// import React, { useEffect, useRef, useState } from 'react';
// import '@google/model-viewer';

// // ✅ Import all local .glb files (bundled) as fallbacks
// import ModelA from '../../assets/model/Model_1781347389454.glb';
// import ModelB from '../../assets/model/Model_1781348981783.glb';
// import ModelC from '../../assets/model/Model_1781350044496.glb';


// // CDN base (jsDelivr) — prioritize CDN but fallback to local if LFS pointer detected
// // const BASE = 'https://purge.jsdelivr.net/gh/sakthimurugesanr/avm-models@main/models/';
// // const BASE =
// // "https://cdn.jsdelivr.net/gh/sakthimurugesanr/avm-models@main/models";

// const BASE =
// "https://raw.githubusercontent.com/sakthimurugesanr/avm-models/main/models";

// const models = [
//   { cdn: `${BASE}/Model_1781347389454.glb`, local: ModelA, id: 'M-001', label: 'Model 1781347389454' },
//   { cdn: `${BASE}/Model_1781348981783.glb`, local: ModelB, id: 'M-002', label: 'Model 1781348981783' },
//   { cdn: `${BASE}/Model_1781350044496.glb`, local: ModelC, id: 'M-003', label: 'Model 1781350044496' },
 
// ];

// /* ─── Helper: Detect if response is Git LFS pointer ─────────────────── */
// async function probeCdnUrl(cdnUrl) {
//   try {
//     // Fetch first 512 bytes to detect LFS pointer without full download
//     const controller = new AbortController();
//     const timeout = setTimeout(() => controller.abort(), 5000);

//     const res = await fetch(cdnUrl, {
//       method: 'HEAD',
//       signal: controller.signal,
//     }).catch(() => {
//       // HEAD might not be supported; try GET with range
//       return fetch(cdnUrl, {
//         headers: { Range: 'bytes=0-512' },
//         signal: controller.signal,
//       });
//     });

//     clearTimeout(timeout);

//     if (!res.ok) {
//       console.warn(`[probeCdnUrl] CDN returned ${res.status} for ${cdnUrl}`);
//       return { isLfs: false };
//     }

//     // Try to peek at first bytes if we got a response body
//     try {
//       const buffer = await res.clone().arrayBuffer().catch(() => null);
//       if (buffer && buffer.byteLength > 0) {
//         const sample = new TextDecoder().decode(buffer.slice(0, 256));
//         const isLfs = sample.includes('version https://git-lfs.github.com/spec/v1') || sample.includes('oid sha256:');
//         if (isLfs) {
//           console.warn(`[probeCdnUrl] Detected Git LFS pointer for ${cdnUrl}`);
//         }
//         return { isLfs };
//       }
//     } catch (e) {
//       console.debug('[probeCdnUrl] Could not peek buffer:', e);
//     }

//     // Assume CDN is serving binary if we can't inspect
//     return { isLfs: false };
//   } catch (e) {
//     console.warn('[probeCdnUrl] probe failed, will use fallback:', e.message);
//     return { isLfs: false, error: e };
//   }
// }

// /* ─── Shimmer keyframe ───────────────────────────────────────── */
// const SKELETON_STYLE = `
//   @keyframes shimmer {
//     0%   { background-position: -600px 0; }
//     100% { background-position:  600px 0; }
//   }
//   .sk-shimmer {
//     background: linear-gradient(90deg,#0d1220 0%,#1a2540 40%,#243050 50%,#1a2540 60%,#0d1220 100%);
//     background-size: 600px 100%;
//     animation: shimmer 1.6s ease-in-out infinite;
//   }
// `;

// /* ─── Skeleton card ──────────────────────────────────────────── */
// const SkeletonCard = ({ isList }) => (
//   <div className={`bg-[#0a0e1a] border border-[#131929] rounded-2xl overflow-hidden flex ${isList ? 'flex-row' : 'flex-col'}`}>
//     <div className={`sk-shimmer shrink-0 ${isList ? 'w-[280px] h-[220px]' : 'w-full'}`}
//       style={isList ? {} : { paddingBottom: '100%' }} />
//     <div className="flex items-center justify-between gap-3 px-3.5 py-3 border-t border-[#0d1220] shrink-0">
//       <div className="flex flex-col gap-1.5 flex-1 min-w-0">
//         <div className="sk-shimmer h-3 w-12 rounded-md" />
//         <div className="sk-shimmer h-2.5 w-32 rounded-md" />
//       </div>
//       <div className="sk-shimmer w-7 h-7 rounded-lg shrink-0" />
//     </div>
//   </div>
// );

// /* ─── Error state ────────────────────────────────────────────── */
// const ErrorCard = ({ model, isList, onRetry }) => (
//   <div className={`bg-[#0a0e1a] border border-red-900/40 rounded-2xl overflow-hidden flex ${isList ? 'flex-row' : 'flex-col'}`}>
//     <div className={`shrink-0 flex flex-col items-center justify-center gap-3 bg-[#110808] ${isList ? 'w-[280px] h-[220px]' : 'w-full'}`}
//       style={isList ? {} : { paddingBottom: '0', height: '220px' }}>
//       <span className="text-3xl">⚠️</span>
//       <div className="text-center px-4">
//         <p className="text-[12px] text-red-400 font-semibold mb-1">Model failed to load</p>
//         <p className="text-[10px] text-slate-600 font-mono break-all">{model.url.split('/').pop()}</p>
//       </div>
//       <button onClick={onRetry}
//         className="text-[11px] text-amber-400 border border-amber-900/50 bg-amber-950/30 px-3 py-1 rounded-full hover:bg-amber-900/40 transition-colors cursor-pointer">
//         ↺ Retry
//       </button>
//     </div>
//     <div className="flex items-center justify-between gap-2 px-3.5 py-3 border-t border-red-900/20 shrink-0">
//       <div className="min-w-0">
//         <p className="text-[13px] font-bold text-red-400/60">{model.id}</p>
//         <p className="text-[10px] text-[#334155] truncate font-mono">{model.label}</p>
//       </div>
//     </div>
//   </div>
// );

// /* ─── Individual card ────────────────────────────────────────── */
// const ModelCard = ({ model, layout, idx }) => {
//   const containerRef = useRef(null);
//   const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'
//   const [rk, setRk] = useState(0);
//   const [resolvedUrl, setResolvedUrl] = useState(null); // CDN or local URL to use
//   const isList = layout === 'list';

//   // ✅ Probe CDN, detect LFS, resolve to CDN or local
//   useEffect(() => {
//     let canceled = false;

//     async function resolveUrl() {
//       let urlToUse = model.local; // default to local

//       // Try CDN first if available
//       if (model.cdn) {
//         const probe = await probeCdnUrl(model.cdn);
//         if (!probe.isLfs) {
//           // CDN is serving binary, use it
//           urlToUse = model.cdn;
//           console.info(`[ModelCard] Using CDN for ${model.id}`);
//         } else {
//           // CDN is serving Git LFS pointer, fall back to local
//           console.warn(`[ModelCard] CDN returned LFS pointer for ${model.id}, using local fallback`);
//           urlToUse = model.local;
//         }
//       }

//       if (!canceled) {
//         setResolvedUrl(urlToUse);
//       }
//     }

//     resolveUrl();
//     return () => { canceled = true; };
//   }, [model.cdn, model.local, model.id]);

//   // ✅ Wire model-viewer events when resolved URL is ready
//   useEffect(() => {
//     if (!resolvedUrl) return;

//     setStatus('loading');
//     const timer = setTimeout(() => {
//       const v = containerRef.current?.querySelector('model-viewer');
//       if (!v) return;

//       const onLoad = () => setStatus('ready');
//       const onError = (e) => {
//         console.error('[ModelCard] model-viewer error for', model.id, e);
//         setStatus('error');
//       };
//       const onWheel = (e) => e.stopPropagation();

//       v.addEventListener('load', onLoad);
//       v.addEventListener('error', onError);
//       v.addEventListener('wheel', onWheel, { passive: true });

//       if (v.loaded) setStatus('ready');

//       return () => {
//         v.removeEventListener('load', onLoad);
//         v.removeEventListener('error', onError);
//         v.removeEventListener('wheel', onWheel);
//       };
//     }, 50);

//     return () => clearTimeout(timer);
//   }, [resolvedUrl, model.id]);

//   const reset = () => { setStatus('loading'); setRk(k => k + 1); };

//   // ─── Error state
//   if (status === 'error') {
//     return (
//       <div className={`bg-[#0a0e1a] border border-red-900/40 rounded-2xl overflow-hidden flex ${isList ? 'flex-row' : 'flex-col'}`}>
//         <div className={`shrink-0 flex flex-col items-center justify-center gap-3 bg-[#110808] ${isList ? 'w-[280px] h-[220px]' : 'w-full'}`} style={isList ? {} : { paddingBottom: '0', height: '220px' }}>
//           <span className="text-3xl">⚠️</span>
//           <div className="text-center px-4">
//             <p className="text-[12px] text-red-400 font-semibold mb-1">Model failed to load</p>
//             <p className="text-[10px] text-slate-600 font-mono break-all">{model.label}</p>
//           </div>
//           <button onClick={reset} className="text-[11px] text-amber-400 border border-amber-900/50 bg-amber-950/30 px-3 py-1 rounded-full hover:bg-amber-900/40 transition-colors cursor-pointer">↺ Retry</button>
//         </div>
//         <div className="flex items-center justify-between gap-2 px-3.5 py-3 border-t border-red-900/20 shrink-0">
//           <div className="min-w-0">
//             <p className="text-[13px] font-bold text-red-400/60">{model.id}</p>
//             <p className="text-[10px] text-[#334155] truncate font-mono">{model.label}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div ref={containerRef} className="relative">
//       {status === 'loading' && (
//         <div className="absolute inset-0 z-10 rounded-2xl overflow-hidden">
//           <SkeletonCard isList={isList} />
//         </div>
//       )}

//       <div className={`
//         group bg-[#0a0e1a] border border-[#131929] rounded-2xl overflow-hidden
//         flex transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1e3a5f]
//         ${isList ? 'flex-row' : 'flex-col'}
//       `} style={{ animationDelay: `${idx * 60}ms` }}>

//         <div className={`relative bg-[#060810] shrink-0 ${isList ? 'w-[280px] h-[220px]' : 'w-full'}`} style={isList ? {} : { paddingBottom: '100%' }}>
//           <div className="absolute inset-0">
//             {status === 'ready' && (
//               <span className="absolute top-2.5 left-2.5 z-10 bg-black/70 border border-[#1e293b] rounded-md px-2 py-0.5 text-[10px] font-bold text-amber-400 tracking-wide backdrop-blur-sm">
//                 {model.id}
//               </span>
//             )}

//             {resolvedUrl && (
//               <model-viewer
//                 key={rk}
//                 src={resolvedUrl}
//                 alt={model.label}
//                 auto-rotate
//                 camera-controls
//                 interaction-prompt="auto"
//                 shadow-intensity="1.2"
//                 shadow-softness="0.7"
//                 exposure="1.15"
//                 environment-image="neutral"
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   display: 'block',
//                   outline: 'none',
//                   backgroundColor: 'transparent',
//                   touchAction: 'none',
//                   opacity: status === 'ready' ? 1 : 0,
//                   transition: 'opacity 0.5s ease',
//                 }}
//               />
//             )}
//           </div>
//         </div>

//         <div className="flex items-center justify-between gap-2 px-3.5 py-3 border-t border-[#0d1220] shrink-0">
//           <div className="min-w-0">
//             <p className="text-[13px] font-bold text-slate-400">{model.id}</p>
//             <p className="text-[10px] text-[#334155] truncate font-mono">{model.label}</p>
//           </div>
//           <button onClick={reset} title="Reset view" className="w-7 h-7 flex items-center justify-center rounded-lg border border-[#1e293b] bg-[#0f172a] text-slate-500 text-sm hover:bg-[#1e293b] hover:text-slate-200 transition-colors cursor-pointer">↺</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ─── Main component ─────────────────────────────────────────── */
// const Dhvaja3DViewer = () => {
//   const [layout, setLayout] = useState('grid3');

//   const layoutBtnClass = (name) =>
//     `px-3 py-1.5 rounded-md border text-xs font-semibold cursor-pointer transition-all duration-150
//     ${layout === name
//       ? 'bg-[#0f172a] text-slate-200 border-[#334155]'
//       : 'bg-transparent text-slate-500 border-[#1e293b] hover:bg-[#0f172a] hover:text-slate-300 hover:border-[#334155]'
//     }`;

//   const gridClass = {
//     grid3: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4',
//     grid2: 'grid grid-cols-1 sm:grid-cols-2 gap-4',
//     list:  'flex flex-col gap-4',
//   }[layout];

//   return (
//     <>
//       <style>{SKELETON_STYLE}</style>
//       <div className="full-width-section w-full min-h-screen bg-[#07090f] text-slate-200 pb-12 font-sans">

//         {/* Layout switcher */}
//         <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-8 lg:px-12 pt-6 pb-4">
//           <div className="flex gap-1.5 flex-wrap">
//             <button className={layoutBtnClass('grid3')} onClick={() => setLayout('grid3')}>⊞ 3×</button>
//             <button className={layoutBtnClass('grid2')} onClick={() => setLayout('grid2')}>⊟ 2×</button>
//             <button className={layoutBtnClass('list')}  onClick={() => setLayout('list')}>☰ List</button>
//           </div>
//         </div>

//         {/* Grid */}
//         <div className={`px-4 sm:px-8 lg:px-12 ${gridClass}`}>
//           {models.map((m, i) => (
//             <ModelCard key={m.id} model={m} layout={layout} idx={i} />
//           ))}
//         </div>

//       </div>
//     </>
//   );
// };

// export default Dhvaja3DViewer;



// import React from "react";
// import "@google/model-viewer";

// const BASE =
//   "https://cdn.jsdelivr.net/gh/sakthimurugesanr/avm-models@main/models";

// const BASE ="https://purge.jsdelivr.net/gh/sakthimurugesanr/avm-models@main/models";
import React from "react";
import "@google/model-viewer";

export default function Dhvaja3DViewer() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#111",
      }}
    >
      <model-viewer
        src="https://cdn.jsdelivr.net/gh/sakthimurugesanr/avm-models@main/models/Model_1781347389454.glb"
        alt="Model"
        camera-controls
        auto-rotate
        shadow-intensity="1"
        exposure="1"
        environment-image="neutral"
        style={{
          width: "100%",
          height: "100%",
        }}
        onError={(e) => console.error("Model load error:", e)}
      />
    </div>
  );
}