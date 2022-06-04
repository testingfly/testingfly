var Rn = Object.defineProperty,
  Un = Object.defineProperties;
var Tn = Object.getOwnPropertyDescriptors;
var Ze = Object.getOwnPropertySymbols;
var Cn = Object.prototype.hasOwnProperty,
  Fn = Object.prototype.propertyIsEnumerable;
var Gt = (R, f, c) => (f in R ? Rn(R, f, { enumerable: !0, configurable: !0, writable: !0, value: c }) : (R[f] = c)),
  Rt = (R, f) => {
    for (var c in f || (f = {})) Cn.call(f, c) && Gt(R, c, f[c]);
    if (Ze) for (var c of Ze(f)) Fn.call(f, c) && Gt(R, c, f[c]);
    return R;
  },
  Ut = (R, f) => Un(R, Tn(f));
var K = (R, f, c) => (Gt(R, typeof f != 'symbol' ? f + '' : f, c), c);
var Dn =
  typeof globalThis != 'undefined'
    ? globalThis
    : typeof window != 'undefined'
    ? window
    : typeof global != 'undefined'
    ? global
    : typeof self != 'undefined'
    ? self
    : {};
function zn(R) {
  return R && R.__esModule && Object.prototype.hasOwnProperty.call(R, 'default') ? R.default : R;
}
class In {
  constructor(f) {
    K(this, '_snapshotStorage');
    K(this, '_snapshotIds', new Map());
    this._snapshotStorage = f;
  }
  serveSnapshot(f, c, k) {
    const I = this._snapshot(f.substring(9), c);
    if (!I) return new Response(null, { status: 404 });
    const M = I.render();
    return this._snapshotIds.set(k, I), new Response(M.html, { status: 200, headers: { 'Content-Type': 'text/html' } });
  }
  serveSnapshotInfo(f, c) {
    const k = this._snapshot(f.substring(13), c);
    return this._respondWithJson(
      k ? { viewport: k.viewport(), url: k.snapshot().frameUrl } : { error: 'No snapshot found' },
    );
  }
  _snapshot(f, c) {
    const k = c.get('name');
    return this._snapshotStorage.snapshotByName(f.slice(1), k);
  }
  _respondWithJson(f) {
    return new Response(JSON.stringify(f), {
      status: 200,
      headers: { 'Cache-Control': 'public, max-age=31536000', 'Content-Type': 'application/json' },
    });
  }
  async serveResource(f, c) {
    const k = this._snapshotIds.get(c),
      I = Mn(f),
      M = k == null ? void 0 : k.resourceByUrl(I);
    if (!M) return new Response(null, { status: 404 });
    const W = M.response.content._sha1,
      D = W ? (await this._snapshotStorage.resourceContent(W)) || new Blob([]) : new Blob([]);
    let H = M.response.content.mimeType;
    /^text\/|^application\/(javascript|json)/.test(H) && !H.includes('charset') && (H = `${H}; charset=utf-8`);
    const j = new Headers();
    j.set('Content-Type', H);
    for (const { name: rt, value: bt } of M.response.headers) j.set(rt, bt);
    j.delete('Content-Encoding'),
      j.delete('Access-Control-Allow-Origin'),
      j.set('Access-Control-Allow-Origin', '*'),
      j.delete('Content-Length'),
      j.set('Content-Length', String(D.size)),
      j.set('Cache-Control', 'public, max-age=31536000');
    const { status: Z } = M.response,
      dt = Z === 101 || Z === 204 || Z === 205 || Z === 304;
    return new Response(dt ? null : D, { headers: j, status: M.response.status, statusText: M.response.statusText });
  }
}
function Mn(R) {
  try {
    const f = new URL(R);
    return (f.hash = ''), f.toString();
  } catch {
    return R;
  }
}
var $t = { exports: {} };
(function (R, f) {
  (function (c, k) {
    k(f);
  })(Dn, function (c) {
    const W = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535],
      D = [
        96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0,
        8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59,
        0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9,
        240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100,
        0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7,
        83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0,
        9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8,
        98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84,
        7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74,
        0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8,
        102, 0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84,
        7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78,
        0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0,
        8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146,
        83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8,
        73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13,
        0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9,
        154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141,
        0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7,
        11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9,
        150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139,
        0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7,
        15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9,
        158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143,
        0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193, 80,
        7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0,
        9, 145, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8,
        136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201,
        81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8,
        28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12,
        0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9,
        197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0,
        8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8,
        10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0,
        9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94,
        0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8,
        14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49,
        0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8,
        89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179,
        0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8,
        53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0,
        8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9,
        187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115,
        0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7,
        7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0,
        9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119,
        0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7,
        9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0,
        9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255,
      ],
      H = [
        80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5,
        513, 84, 5, 33, 92, 5, 8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25,
        91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82,
        5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577,
      ],
      B = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227,
        258, 0, 0,
      ],
      j = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112],
      Z = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097,
        6145, 8193, 12289, 16385, 24577,
      ],
      dt = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
      rt = 15;
    function bt() {
      let n, e, t, r, a, l;
      function d(m, g, v, T, N, L, s, p, i, o, u) {
        let w, S, x, b, h, y, C, U, A, E, F, O, V, z, q;
        (E = 0), (h = v);
        do t[m[g + E]]++, E++, h--;
        while (h !== 0);
        if (t[0] == v) return (s[0] = -1), (p[0] = 0), 0;
        for (U = p[0], y = 1; y <= rt && t[y] === 0; y++);
        for (C = y, U < y && (U = y), h = rt; h !== 0 && t[h] === 0; h--);
        for (x = h, U > h && (U = h), p[0] = U, z = 1 << y; y < h; y++, z <<= 1) if ((z -= t[y]) < 0) return -3;
        if ((z -= t[h]) < 0) return -3;
        for (t[h] += z, l[1] = y = 0, E = 1, V = 2; --h != 0; ) (l[V] = y += t[E]), V++, E++;
        (h = 0), (E = 0);
        do (y = m[g + E]) !== 0 && (u[l[y]++] = h), E++;
        while (++h < v);
        for (v = l[x], l[0] = h = 0, E = 0, b = -1, O = -U, a[0] = 0, F = 0, q = 0; C <= x; C++)
          for (w = t[C]; w-- != 0; ) {
            for (; C > O + U; ) {
              if (
                (b++,
                (O += U),
                (q = x - O),
                (q = q > U ? U : q),
                (S = 1 << (y = C - O)) > w + 1 && ((S -= w + 1), (V = C), y < q))
              )
                for (; ++y < q && !((S <<= 1) <= t[++V]); ) S -= t[V];
              if (((q = 1 << y), o[0] + q > 1440)) return -3;
              (a[b] = F = o[0]),
                (o[0] += q),
                b !== 0
                  ? ((l[b] = h),
                    (r[0] = y),
                    (r[1] = U),
                    (y = h >>> (O - U)),
                    (r[2] = F - a[b - 1] - y),
                    i.set(r, 3 * (a[b - 1] + y)))
                  : (s[0] = F);
            }
            for (
              r[1] = C - O,
                E >= v
                  ? (r[0] = 192)
                  : u[E] < T
                  ? ((r[0] = u[E] < 256 ? 0 : 96), (r[2] = u[E++]))
                  : ((r[0] = L[u[E] - T] + 16 + 64), (r[2] = N[u[E++] - T])),
                S = 1 << (C - O),
                y = h >>> O;
              y < q;
              y += S
            )
              i.set(r, 3 * (F + y));
            for (y = 1 << (C - 1); (h & y) != 0; y >>>= 1) h ^= y;
            for (h ^= y, A = (1 << O) - 1; (h & A) != l[b]; ) b--, (O -= U), (A = (1 << O) - 1);
          }
        return z !== 0 && x != 1 ? -5 : 0;
      }
      function _(m) {
        let g;
        for (
          n ||
            ((n = []),
            (e = []),
            (t = new Int32Array(16)),
            (r = []),
            (a = new Int32Array(rt)),
            (l = new Int32Array(16))),
            e.length < m && (e = []),
            g = 0;
          g < m;
          g++
        )
          e[g] = 0;
        for (g = 0; g < 16; g++) t[g] = 0;
        for (g = 0; g < 3; g++) r[g] = 0;
        a.set(t.subarray(0, rt), 0), l.set(t.subarray(0, 16), 0);
      }
      (this.inflate_trees_bits = function (m, g, v, T, N) {
        let L;
        return (
          _(19),
          (n[0] = 0),
          (L = d(m, 0, 19, 19, null, null, v, g, T, n, e)),
          L == -3
            ? (N.msg = 'oversubscribed dynamic bit lengths tree')
            : (L != -5 && g[0] !== 0) || ((N.msg = 'incomplete dynamic bit lengths tree'), (L = -3)),
          L
        );
      }),
        (this.inflate_trees_dynamic = function (m, g, v, T, N, L, s, p, i) {
          let o;
          return (
            _(288),
            (n[0] = 0),
            (o = d(v, 0, m, 257, B, j, L, T, p, n, e)),
            o != 0 || T[0] === 0
              ? (o == -3
                  ? (i.msg = 'oversubscribed literal/length tree')
                  : o != -4 && ((i.msg = 'incomplete literal/length tree'), (o = -3)),
                o)
              : (_(288),
                (o = d(v, m, g, 0, Z, dt, s, N, p, n, e)),
                o != 0 || (N[0] === 0 && m > 257)
                  ? (o == -3
                      ? (i.msg = 'oversubscribed distance tree')
                      : o == -5
                      ? ((i.msg = 'incomplete distance tree'), (o = -3))
                      : o != -4 && ((i.msg = 'empty distance tree with lengths'), (o = -3)),
                    o)
                  : 0)
          );
        });
    }
    bt.inflate_trees_fixed = function (n, e, t, r) {
      return (n[0] = 9), (e[0] = 5), (t[0] = D), (r[0] = H), 0;
    };
    function en() {
      const n = this;
      let e,
        t,
        r,
        a,
        l = 0,
        d = 0,
        _ = 0,
        m = 0,
        g = 0,
        v = 0,
        T = 0,
        N = 0,
        L = 0,
        s = 0;
      function p(i, o, u, w, S, x, b, h) {
        let y, C, U, A, E, F, O, V, z, q, ct, lt, P, wt, G, $;
        (O = h.next_in_index),
          (V = h.avail_in),
          (E = b.bitb),
          (F = b.bitk),
          (z = b.write),
          (q = z < b.read ? b.read - z - 1 : b.end - z),
          (ct = W[i]),
          (lt = W[o]);
        do {
          for (; F < 20; ) V--, (E |= (255 & h.read_byte(O++)) << F), (F += 8);
          if (((y = E & ct), (C = u), (U = w), ($ = 3 * (U + y)), (A = C[$]) !== 0))
            for (;;) {
              if (((E >>= C[$ + 1]), (F -= C[$ + 1]), (16 & A) != 0)) {
                for (A &= 15, P = C[$ + 2] + (E & W[A]), E >>= A, F -= A; F < 15; )
                  V--, (E |= (255 & h.read_byte(O++)) << F), (F += 8);
                for (y = E & lt, C = S, U = x, $ = 3 * (U + y), A = C[$]; ; ) {
                  if (((E >>= C[$ + 1]), (F -= C[$ + 1]), (16 & A) != 0)) {
                    for (A &= 15; F < A; ) V--, (E |= (255 & h.read_byte(O++)) << F), (F += 8);
                    if (((wt = C[$ + 2] + (E & W[A])), (E >>= A), (F -= A), (q -= P), z >= wt))
                      (G = z - wt),
                        z - G > 0 && 2 > z - G
                          ? ((b.window[z++] = b.window[G++]), (b.window[z++] = b.window[G++]), (P -= 2))
                          : (b.window.set(b.window.subarray(G, G + 2), z), (z += 2), (G += 2), (P -= 2));
                    else {
                      G = z - wt;
                      do G += b.end;
                      while (G < 0);
                      if (((A = b.end - G), P > A)) {
                        if (((P -= A), z - G > 0 && A > z - G))
                          do b.window[z++] = b.window[G++];
                          while (--A != 0);
                        else b.window.set(b.window.subarray(G, G + A), z), (z += A), (G += A), (A = 0);
                        G = 0;
                      }
                    }
                    if (z - G > 0 && P > z - G)
                      do b.window[z++] = b.window[G++];
                      while (--P != 0);
                    else b.window.set(b.window.subarray(G, G + P), z), (z += P), (G += P), (P = 0);
                    break;
                  }
                  if ((64 & A) != 0)
                    return (
                      (h.msg = 'invalid distance code'),
                      (P = h.avail_in - V),
                      (P = F >> 3 < P ? F >> 3 : P),
                      (V += P),
                      (O -= P),
                      (F -= P << 3),
                      (b.bitb = E),
                      (b.bitk = F),
                      (h.avail_in = V),
                      (h.total_in += O - h.next_in_index),
                      (h.next_in_index = O),
                      (b.write = z),
                      -3
                    );
                  (y += C[$ + 2]), (y += E & W[A]), ($ = 3 * (U + y)), (A = C[$]);
                }
                break;
              }
              if ((64 & A) != 0)
                return (32 & A) != 0
                  ? ((P = h.avail_in - V),
                    (P = F >> 3 < P ? F >> 3 : P),
                    (V += P),
                    (O -= P),
                    (F -= P << 3),
                    (b.bitb = E),
                    (b.bitk = F),
                    (h.avail_in = V),
                    (h.total_in += O - h.next_in_index),
                    (h.next_in_index = O),
                    (b.write = z),
                    1)
                  : ((h.msg = 'invalid literal/length code'),
                    (P = h.avail_in - V),
                    (P = F >> 3 < P ? F >> 3 : P),
                    (V += P),
                    (O -= P),
                    (F -= P << 3),
                    (b.bitb = E),
                    (b.bitk = F),
                    (h.avail_in = V),
                    (h.total_in += O - h.next_in_index),
                    (h.next_in_index = O),
                    (b.write = z),
                    -3);
              if (((y += C[$ + 2]), (y += E & W[A]), ($ = 3 * (U + y)), (A = C[$]) === 0)) {
                (E >>= C[$ + 1]), (F -= C[$ + 1]), (b.window[z++] = C[$ + 2]), q--;
                break;
              }
            }
          else (E >>= C[$ + 1]), (F -= C[$ + 1]), (b.window[z++] = C[$ + 2]), q--;
        } while (q >= 258 && V >= 10);
        return (
          (P = h.avail_in - V),
          (P = F >> 3 < P ? F >> 3 : P),
          (V += P),
          (O -= P),
          (F -= P << 3),
          (b.bitb = E),
          (b.bitk = F),
          (h.avail_in = V),
          (h.total_in += O - h.next_in_index),
          (h.next_in_index = O),
          (b.write = z),
          0
        );
      }
      (n.init = function (i, o, u, w, S, x) {
        (e = 0), (T = i), (N = o), (r = u), (L = w), (a = S), (s = x), (t = null);
      }),
        (n.proc = function (i, o, u) {
          let w,
            S,
            x,
            b,
            h,
            y,
            C,
            U = 0,
            A = 0,
            E = 0;
          for (
            E = o.next_in_index,
              b = o.avail_in,
              U = i.bitb,
              A = i.bitk,
              h = i.write,
              y = h < i.read ? i.read - h - 1 : i.end - h;
            ;

          )
            switch (e) {
              case 0:
                if (
                  y >= 258 &&
                  b >= 10 &&
                  ((i.bitb = U),
                  (i.bitk = A),
                  (o.avail_in = b),
                  (o.total_in += E - o.next_in_index),
                  (o.next_in_index = E),
                  (i.write = h),
                  (u = p(T, N, r, L, a, s, i, o)),
                  (E = o.next_in_index),
                  (b = o.avail_in),
                  (U = i.bitb),
                  (A = i.bitk),
                  (h = i.write),
                  (y = h < i.read ? i.read - h - 1 : i.end - h),
                  u != 0)
                ) {
                  e = u == 1 ? 7 : 9;
                  break;
                }
                (_ = T), (t = r), (d = L), (e = 1);
              case 1:
                for (w = _; A < w; ) {
                  if (b === 0)
                    return (
                      (i.bitb = U),
                      (i.bitk = A),
                      (o.avail_in = b),
                      (o.total_in += E - o.next_in_index),
                      (o.next_in_index = E),
                      (i.write = h),
                      i.inflate_flush(o, u)
                    );
                  (u = 0), b--, (U |= (255 & o.read_byte(E++)) << A), (A += 8);
                }
                if (((S = 3 * (d + (U & W[w]))), (U >>>= t[S + 1]), (A -= t[S + 1]), (x = t[S]), x === 0)) {
                  (m = t[S + 2]), (e = 6);
                  break;
                }
                if ((16 & x) != 0) {
                  (g = 15 & x), (l = t[S + 2]), (e = 2);
                  break;
                }
                if ((64 & x) == 0) {
                  (_ = x), (d = S / 3 + t[S + 2]);
                  break;
                }
                if ((32 & x) != 0) {
                  e = 7;
                  break;
                }
                return (
                  (e = 9),
                  (o.msg = 'invalid literal/length code'),
                  (u = -3),
                  (i.bitb = U),
                  (i.bitk = A),
                  (o.avail_in = b),
                  (o.total_in += E - o.next_in_index),
                  (o.next_in_index = E),
                  (i.write = h),
                  i.inflate_flush(o, u)
                );
              case 2:
                for (w = g; A < w; ) {
                  if (b === 0)
                    return (
                      (i.bitb = U),
                      (i.bitk = A),
                      (o.avail_in = b),
                      (o.total_in += E - o.next_in_index),
                      (o.next_in_index = E),
                      (i.write = h),
                      i.inflate_flush(o, u)
                    );
                  (u = 0), b--, (U |= (255 & o.read_byte(E++)) << A), (A += 8);
                }
                (l += U & W[w]), (U >>= w), (A -= w), (_ = N), (t = a), (d = s), (e = 3);
              case 3:
                for (w = _; A < w; ) {
                  if (b === 0)
                    return (
                      (i.bitb = U),
                      (i.bitk = A),
                      (o.avail_in = b),
                      (o.total_in += E - o.next_in_index),
                      (o.next_in_index = E),
                      (i.write = h),
                      i.inflate_flush(o, u)
                    );
                  (u = 0), b--, (U |= (255 & o.read_byte(E++)) << A), (A += 8);
                }
                if (((S = 3 * (d + (U & W[w]))), (U >>= t[S + 1]), (A -= t[S + 1]), (x = t[S]), (16 & x) != 0)) {
                  (g = 15 & x), (v = t[S + 2]), (e = 4);
                  break;
                }
                if ((64 & x) == 0) {
                  (_ = x), (d = S / 3 + t[S + 2]);
                  break;
                }
                return (
                  (e = 9),
                  (o.msg = 'invalid distance code'),
                  (u = -3),
                  (i.bitb = U),
                  (i.bitk = A),
                  (o.avail_in = b),
                  (o.total_in += E - o.next_in_index),
                  (o.next_in_index = E),
                  (i.write = h),
                  i.inflate_flush(o, u)
                );
              case 4:
                for (w = g; A < w; ) {
                  if (b === 0)
                    return (
                      (i.bitb = U),
                      (i.bitk = A),
                      (o.avail_in = b),
                      (o.total_in += E - o.next_in_index),
                      (o.next_in_index = E),
                      (i.write = h),
                      i.inflate_flush(o, u)
                    );
                  (u = 0), b--, (U |= (255 & o.read_byte(E++)) << A), (A += 8);
                }
                (v += U & W[w]), (U >>= w), (A -= w), (e = 5);
              case 5:
                for (C = h - v; C < 0; ) C += i.end;
                for (; l !== 0; ) {
                  if (
                    y === 0 &&
                    (h == i.end && i.read !== 0 && ((h = 0), (y = h < i.read ? i.read - h - 1 : i.end - h)),
                    y === 0 &&
                      ((i.write = h),
                      (u = i.inflate_flush(o, u)),
                      (h = i.write),
                      (y = h < i.read ? i.read - h - 1 : i.end - h),
                      h == i.end && i.read !== 0 && ((h = 0), (y = h < i.read ? i.read - h - 1 : i.end - h)),
                      y === 0))
                  )
                    return (
                      (i.bitb = U),
                      (i.bitk = A),
                      (o.avail_in = b),
                      (o.total_in += E - o.next_in_index),
                      (o.next_in_index = E),
                      (i.write = h),
                      i.inflate_flush(o, u)
                    );
                  (i.window[h++] = i.window[C++]), y--, C == i.end && (C = 0), l--;
                }
                e = 0;
                break;
              case 6:
                if (
                  y === 0 &&
                  (h == i.end && i.read !== 0 && ((h = 0), (y = h < i.read ? i.read - h - 1 : i.end - h)),
                  y === 0 &&
                    ((i.write = h),
                    (u = i.inflate_flush(o, u)),
                    (h = i.write),
                    (y = h < i.read ? i.read - h - 1 : i.end - h),
                    h == i.end && i.read !== 0 && ((h = 0), (y = h < i.read ? i.read - h - 1 : i.end - h)),
                    y === 0))
                )
                  return (
                    (i.bitb = U),
                    (i.bitk = A),
                    (o.avail_in = b),
                    (o.total_in += E - o.next_in_index),
                    (o.next_in_index = E),
                    (i.write = h),
                    i.inflate_flush(o, u)
                  );
                (u = 0), (i.window[h++] = m), y--, (e = 0);
                break;
              case 7:
                if (
                  (A > 7 && ((A -= 8), b++, E--),
                  (i.write = h),
                  (u = i.inflate_flush(o, u)),
                  (h = i.write),
                  (y = h < i.read ? i.read - h - 1 : i.end - h),
                  i.read != i.write)
                )
                  return (
                    (i.bitb = U),
                    (i.bitk = A),
                    (o.avail_in = b),
                    (o.total_in += E - o.next_in_index),
                    (o.next_in_index = E),
                    (i.write = h),
                    i.inflate_flush(o, u)
                  );
                e = 8;
              case 8:
                return (
                  (u = 1),
                  (i.bitb = U),
                  (i.bitk = A),
                  (o.avail_in = b),
                  (o.total_in += E - o.next_in_index),
                  (o.next_in_index = E),
                  (i.write = h),
                  i.inflate_flush(o, u)
                );
              case 9:
                return (
                  (u = -3),
                  (i.bitb = U),
                  (i.bitk = A),
                  (o.avail_in = b),
                  (o.total_in += E - o.next_in_index),
                  (o.next_in_index = E),
                  (i.write = h),
                  i.inflate_flush(o, u)
                );
              default:
                return (
                  (u = -2),
                  (i.bitb = U),
                  (i.bitk = A),
                  (o.avail_in = b),
                  (o.total_in += E - o.next_in_index),
                  (o.next_in_index = E),
                  (i.write = h),
                  i.inflate_flush(o, u)
                );
            }
        }),
        (n.free = function () {});
    }
    const Zt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    function nn(n, e) {
      const t = this;
      let r,
        a = 0,
        l = 0,
        d = 0,
        _ = 0;
      const m = [0],
        g = [0],
        v = new en();
      let T = 0,
        N = new Int32Array(4320);
      const L = new bt();
      (t.bitk = 0),
        (t.bitb = 0),
        (t.window = new Uint8Array(e)),
        (t.end = e),
        (t.read = 0),
        (t.write = 0),
        (t.reset = function (s, p) {
          p && (p[0] = 0), a == 6 && v.free(s), (a = 0), (t.bitk = 0), (t.bitb = 0), (t.read = t.write = 0);
        }),
        t.reset(n, null),
        (t.inflate_flush = function (s, p) {
          let i, o, u;
          return (
            (o = s.next_out_index),
            (u = t.read),
            (i = (u <= t.write ? t.write : t.end) - u),
            i > s.avail_out && (i = s.avail_out),
            i !== 0 && p == -5 && (p = 0),
            (s.avail_out -= i),
            (s.total_out += i),
            s.next_out.set(t.window.subarray(u, u + i), o),
            (o += i),
            (u += i),
            u == t.end &&
              ((u = 0),
              t.write == t.end && (t.write = 0),
              (i = t.write - u),
              i > s.avail_out && (i = s.avail_out),
              i !== 0 && p == -5 && (p = 0),
              (s.avail_out -= i),
              (s.total_out += i),
              s.next_out.set(t.window.subarray(u, u + i), o),
              (o += i),
              (u += i)),
            (s.next_out_index = o),
            (t.read = u),
            p
          );
        }),
        (t.proc = function (s, p) {
          let i, o, u, w, S, x, b, h;
          for (
            w = s.next_in_index,
              S = s.avail_in,
              o = t.bitb,
              u = t.bitk,
              x = t.write,
              b = x < t.read ? t.read - x - 1 : t.end - x;
            ;

          ) {
            let y, C, U, A, E, F, O, V;
            switch (a) {
              case 0:
                for (; u < 3; ) {
                  if (S === 0)
                    return (
                      (t.bitb = o),
                      (t.bitk = u),
                      (s.avail_in = S),
                      (s.total_in += w - s.next_in_index),
                      (s.next_in_index = w),
                      (t.write = x),
                      t.inflate_flush(s, p)
                    );
                  (p = 0), S--, (o |= (255 & s.read_byte(w++)) << u), (u += 8);
                }
                switch (((i = 7 & o), (T = 1 & i), i >>> 1)) {
                  case 0:
                    (o >>>= 3), (u -= 3), (i = 7 & u), (o >>>= i), (u -= i), (a = 1);
                    break;
                  case 1:
                    (y = []),
                      (C = []),
                      (U = [[]]),
                      (A = [[]]),
                      bt.inflate_trees_fixed(y, C, U, A),
                      v.init(y[0], C[0], U[0], 0, A[0], 0),
                      (o >>>= 3),
                      (u -= 3),
                      (a = 6);
                    break;
                  case 2:
                    (o >>>= 3), (u -= 3), (a = 3);
                    break;
                  case 3:
                    return (
                      (o >>>= 3),
                      (u -= 3),
                      (a = 9),
                      (s.msg = 'invalid block type'),
                      (p = -3),
                      (t.bitb = o),
                      (t.bitk = u),
                      (s.avail_in = S),
                      (s.total_in += w - s.next_in_index),
                      (s.next_in_index = w),
                      (t.write = x),
                      t.inflate_flush(s, p)
                    );
                }
                break;
              case 1:
                for (; u < 32; ) {
                  if (S === 0)
                    return (
                      (t.bitb = o),
                      (t.bitk = u),
                      (s.avail_in = S),
                      (s.total_in += w - s.next_in_index),
                      (s.next_in_index = w),
                      (t.write = x),
                      t.inflate_flush(s, p)
                    );
                  (p = 0), S--, (o |= (255 & s.read_byte(w++)) << u), (u += 8);
                }
                if (((~o >>> 16) & 65535) != (65535 & o))
                  return (
                    (a = 9),
                    (s.msg = 'invalid stored block lengths'),
                    (p = -3),
                    (t.bitb = o),
                    (t.bitk = u),
                    (s.avail_in = S),
                    (s.total_in += w - s.next_in_index),
                    (s.next_in_index = w),
                    (t.write = x),
                    t.inflate_flush(s, p)
                  );
                (l = 65535 & o), (o = u = 0), (a = l !== 0 ? 2 : T !== 0 ? 7 : 0);
                break;
              case 2:
                if (
                  S === 0 ||
                  (b === 0 &&
                    (x == t.end && t.read !== 0 && ((x = 0), (b = x < t.read ? t.read - x - 1 : t.end - x)),
                    b === 0 &&
                      ((t.write = x),
                      (p = t.inflate_flush(s, p)),
                      (x = t.write),
                      (b = x < t.read ? t.read - x - 1 : t.end - x),
                      x == t.end && t.read !== 0 && ((x = 0), (b = x < t.read ? t.read - x - 1 : t.end - x)),
                      b === 0)))
                )
                  return (
                    (t.bitb = o),
                    (t.bitk = u),
                    (s.avail_in = S),
                    (s.total_in += w - s.next_in_index),
                    (s.next_in_index = w),
                    (t.write = x),
                    t.inflate_flush(s, p)
                  );
                if (
                  ((p = 0),
                  (i = l),
                  i > S && (i = S),
                  i > b && (i = b),
                  t.window.set(s.read_buf(w, i), x),
                  (w += i),
                  (S -= i),
                  (x += i),
                  (b -= i),
                  (l -= i) != 0)
                )
                  break;
                a = T !== 0 ? 7 : 0;
                break;
              case 3:
                for (; u < 14; ) {
                  if (S === 0)
                    return (
                      (t.bitb = o),
                      (t.bitk = u),
                      (s.avail_in = S),
                      (s.total_in += w - s.next_in_index),
                      (s.next_in_index = w),
                      (t.write = x),
                      t.inflate_flush(s, p)
                    );
                  (p = 0), S--, (o |= (255 & s.read_byte(w++)) << u), (u += 8);
                }
                if (((d = i = 16383 & o), (31 & i) > 29 || ((i >> 5) & 31) > 29))
                  return (
                    (a = 9),
                    (s.msg = 'too many length or distance symbols'),
                    (p = -3),
                    (t.bitb = o),
                    (t.bitk = u),
                    (s.avail_in = S),
                    (s.total_in += w - s.next_in_index),
                    (s.next_in_index = w),
                    (t.write = x),
                    t.inflate_flush(s, p)
                  );
                if (((i = 258 + (31 & i) + ((i >> 5) & 31)), !r || r.length < i)) r = [];
                else for (h = 0; h < i; h++) r[h] = 0;
                (o >>>= 14), (u -= 14), (_ = 0), (a = 4);
              case 4:
                for (; _ < 4 + (d >>> 10); ) {
                  for (; u < 3; ) {
                    if (S === 0)
                      return (
                        (t.bitb = o),
                        (t.bitk = u),
                        (s.avail_in = S),
                        (s.total_in += w - s.next_in_index),
                        (s.next_in_index = w),
                        (t.write = x),
                        t.inflate_flush(s, p)
                      );
                    (p = 0), S--, (o |= (255 & s.read_byte(w++)) << u), (u += 8);
                  }
                  (r[Zt[_++]] = 7 & o), (o >>>= 3), (u -= 3);
                }
                for (; _ < 19; ) r[Zt[_++]] = 0;
                if (((m[0] = 7), (i = L.inflate_trees_bits(r, m, g, N, s)), i != 0))
                  return (
                    (p = i) == -3 && ((r = null), (a = 9)),
                    (t.bitb = o),
                    (t.bitk = u),
                    (s.avail_in = S),
                    (s.total_in += w - s.next_in_index),
                    (s.next_in_index = w),
                    (t.write = x),
                    t.inflate_flush(s, p)
                  );
                (_ = 0), (a = 5);
              case 5:
                for (; (i = d), !(_ >= 258 + (31 & i) + ((i >> 5) & 31)); ) {
                  let z, q;
                  for (i = m[0]; u < i; ) {
                    if (S === 0)
                      return (
                        (t.bitb = o),
                        (t.bitk = u),
                        (s.avail_in = S),
                        (s.total_in += w - s.next_in_index),
                        (s.next_in_index = w),
                        (t.write = x),
                        t.inflate_flush(s, p)
                      );
                    (p = 0), S--, (o |= (255 & s.read_byte(w++)) << u), (u += 8);
                  }
                  if (((i = N[3 * (g[0] + (o & W[i])) + 1]), (q = N[3 * (g[0] + (o & W[i])) + 2]), q < 16))
                    (o >>>= i), (u -= i), (r[_++] = q);
                  else {
                    for (h = q == 18 ? 7 : q - 14, z = q == 18 ? 11 : 3; u < i + h; ) {
                      if (S === 0)
                        return (
                          (t.bitb = o),
                          (t.bitk = u),
                          (s.avail_in = S),
                          (s.total_in += w - s.next_in_index),
                          (s.next_in_index = w),
                          (t.write = x),
                          t.inflate_flush(s, p)
                        );
                      (p = 0), S--, (o |= (255 & s.read_byte(w++)) << u), (u += 8);
                    }
                    if (
                      ((o >>>= i),
                      (u -= i),
                      (z += o & W[h]),
                      (o >>>= h),
                      (u -= h),
                      (h = _),
                      (i = d),
                      h + z > 258 + (31 & i) + ((i >> 5) & 31) || (q == 16 && h < 1))
                    )
                      return (
                        (r = null),
                        (a = 9),
                        (s.msg = 'invalid bit length repeat'),
                        (p = -3),
                        (t.bitb = o),
                        (t.bitk = u),
                        (s.avail_in = S),
                        (s.total_in += w - s.next_in_index),
                        (s.next_in_index = w),
                        (t.write = x),
                        t.inflate_flush(s, p)
                      );
                    q = q == 16 ? r[h - 1] : 0;
                    do r[h++] = q;
                    while (--z != 0);
                    _ = h;
                  }
                }
                if (
                  ((g[0] = -1),
                  (E = []),
                  (F = []),
                  (O = []),
                  (V = []),
                  (E[0] = 9),
                  (F[0] = 6),
                  (i = d),
                  (i = L.inflate_trees_dynamic(257 + (31 & i), 1 + ((i >> 5) & 31), r, E, F, O, V, N, s)),
                  i != 0)
                )
                  return (
                    i == -3 && ((r = null), (a = 9)),
                    (p = i),
                    (t.bitb = o),
                    (t.bitk = u),
                    (s.avail_in = S),
                    (s.total_in += w - s.next_in_index),
                    (s.next_in_index = w),
                    (t.write = x),
                    t.inflate_flush(s, p)
                  );
                v.init(E[0], F[0], N, O[0], N, V[0]), (a = 6);
              case 6:
                if (
                  ((t.bitb = o),
                  (t.bitk = u),
                  (s.avail_in = S),
                  (s.total_in += w - s.next_in_index),
                  (s.next_in_index = w),
                  (t.write = x),
                  (p = v.proc(t, s, p)) != 1)
                )
                  return t.inflate_flush(s, p);
                if (
                  ((p = 0),
                  v.free(s),
                  (w = s.next_in_index),
                  (S = s.avail_in),
                  (o = t.bitb),
                  (u = t.bitk),
                  (x = t.write),
                  (b = x < t.read ? t.read - x - 1 : t.end - x),
                  T === 0)
                ) {
                  a = 0;
                  break;
                }
                a = 7;
              case 7:
                if (
                  ((t.write = x),
                  (p = t.inflate_flush(s, p)),
                  (x = t.write),
                  (b = x < t.read ? t.read - x - 1 : t.end - x),
                  t.read != t.write)
                )
                  return (
                    (t.bitb = o),
                    (t.bitk = u),
                    (s.avail_in = S),
                    (s.total_in += w - s.next_in_index),
                    (s.next_in_index = w),
                    (t.write = x),
                    t.inflate_flush(s, p)
                  );
                a = 8;
              case 8:
                return (
                  (p = 1),
                  (t.bitb = o),
                  (t.bitk = u),
                  (s.avail_in = S),
                  (s.total_in += w - s.next_in_index),
                  (s.next_in_index = w),
                  (t.write = x),
                  t.inflate_flush(s, p)
                );
              case 9:
                return (
                  (p = -3),
                  (t.bitb = o),
                  (t.bitk = u),
                  (s.avail_in = S),
                  (s.total_in += w - s.next_in_index),
                  (s.next_in_index = w),
                  (t.write = x),
                  t.inflate_flush(s, p)
                );
              default:
                return (
                  (p = -2),
                  (t.bitb = o),
                  (t.bitk = u),
                  (s.avail_in = S),
                  (s.total_in += w - s.next_in_index),
                  (s.next_in_index = w),
                  (t.write = x),
                  t.inflate_flush(s, p)
                );
            }
          }
        }),
        (t.free = function (s) {
          t.reset(s, null), (t.window = null), (N = null);
        }),
        (t.set_dictionary = function (s, p, i) {
          t.window.set(s.subarray(p, p + i), 0), (t.read = t.write = i);
        }),
        (t.sync_point = function () {
          return a == 1 ? 1 : 0;
        });
    }
    const it = 13,
      rn = [0, 0, 255, 255];
    function sn() {
      const n = this;
      function e(t) {
        return t && t.istate
          ? ((t.total_in = t.total_out = 0), (t.msg = null), (t.istate.mode = 7), t.istate.blocks.reset(t, null), 0)
          : -2;
      }
      (n.mode = 0),
        (n.method = 0),
        (n.was = [0]),
        (n.need = 0),
        (n.marker = 0),
        (n.wbits = 0),
        (n.inflateEnd = function (t) {
          return n.blocks && n.blocks.free(t), (n.blocks = null), 0;
        }),
        (n.inflateInit = function (t, r) {
          return (
            (t.msg = null),
            (n.blocks = null),
            r < 8 || r > 15 ? (n.inflateEnd(t), -2) : ((n.wbits = r), (t.istate.blocks = new nn(t, 1 << r)), e(t), 0)
          );
        }),
        (n.inflate = function (t, r) {
          let a, l;
          if (!t || !t.istate || !t.next_in) return -2;
          const d = t.istate;
          for (r = r == 4 ? -5 : 0, a = -5; ; )
            switch (d.mode) {
              case 0:
                if (t.avail_in === 0) return a;
                if (((a = r), t.avail_in--, t.total_in++, (15 & (d.method = t.read_byte(t.next_in_index++))) != 8)) {
                  (d.mode = it), (t.msg = 'unknown compression method'), (d.marker = 5);
                  break;
                }
                if (8 + (d.method >> 4) > d.wbits) {
                  (d.mode = it), (t.msg = 'invalid window size'), (d.marker = 5);
                  break;
                }
                d.mode = 1;
              case 1:
                if (t.avail_in === 0) return a;
                if (
                  ((a = r),
                  t.avail_in--,
                  t.total_in++,
                  (l = 255 & t.read_byte(t.next_in_index++)),
                  ((d.method << 8) + l) % 31 != 0)
                ) {
                  (d.mode = it), (t.msg = 'incorrect header check'), (d.marker = 5);
                  break;
                }
                if ((32 & l) == 0) {
                  d.mode = 7;
                  break;
                }
                d.mode = 2;
              case 2:
                if (t.avail_in === 0) return a;
                (a = r),
                  t.avail_in--,
                  t.total_in++,
                  (d.need = ((255 & t.read_byte(t.next_in_index++)) << 24) & 4278190080),
                  (d.mode = 3);
              case 3:
                if (t.avail_in === 0) return a;
                (a = r),
                  t.avail_in--,
                  t.total_in++,
                  (d.need += ((255 & t.read_byte(t.next_in_index++)) << 16) & 16711680),
                  (d.mode = 4);
              case 4:
                if (t.avail_in === 0) return a;
                (a = r),
                  t.avail_in--,
                  t.total_in++,
                  (d.need += ((255 & t.read_byte(t.next_in_index++)) << 8) & 65280),
                  (d.mode = 5);
              case 5:
                return t.avail_in === 0
                  ? a
                  : ((a = r),
                    t.avail_in--,
                    t.total_in++,
                    (d.need += 255 & t.read_byte(t.next_in_index++)),
                    (d.mode = 6),
                    2);
              case 6:
                return (d.mode = it), (t.msg = 'need dictionary'), (d.marker = 0), -2;
              case 7:
                if (((a = d.blocks.proc(t, a)), a == -3)) {
                  (d.mode = it), (d.marker = 0);
                  break;
                }
                if ((a == 0 && (a = r), a != 1)) return a;
                (a = r), d.blocks.reset(t, d.was), (d.mode = 12);
              case 12:
                return 1;
              case it:
                return -3;
              default:
                return -2;
            }
        }),
        (n.inflateSetDictionary = function (t, r, a) {
          let l = 0,
            d = a;
          if (!t || !t.istate || t.istate.mode != 6) return -2;
          const _ = t.istate;
          return (
            d >= 1 << _.wbits && ((d = (1 << _.wbits) - 1), (l = a - d)),
            _.blocks.set_dictionary(r, l, d),
            (_.mode = 7),
            0
          );
        }),
        (n.inflateSync = function (t) {
          let r, a, l, d, _;
          if (!t || !t.istate) return -2;
          const m = t.istate;
          if ((m.mode != it && ((m.mode = it), (m.marker = 0)), (r = t.avail_in) === 0)) return -5;
          for (a = t.next_in_index, l = m.marker; r !== 0 && l < 4; )
            t.read_byte(a) == rn[l] ? l++ : (l = t.read_byte(a) !== 0 ? 0 : 4 - l), a++, r--;
          return (
            (t.total_in += a - t.next_in_index),
            (t.next_in_index = a),
            (t.avail_in = r),
            (m.marker = l),
            l != 4
              ? -3
              : ((d = t.total_in), (_ = t.total_out), e(t), (t.total_in = d), (t.total_out = _), (m.mode = 7), 0)
          );
        }),
        (n.inflateSyncPoint = function (t) {
          return t && t.istate && t.istate.blocks ? t.istate.blocks.sync_point() : -2;
        });
    }
    function Yt() {}
    Yt.prototype = {
      inflateInit: function (n) {
        const e = this;
        return (e.istate = new sn()), n || (n = 15), e.istate.inflateInit(e, n);
      },
      inflate: function (n) {
        const e = this;
        return e.istate ? e.istate.inflate(e, n) : -2;
      },
      inflateEnd: function () {
        const n = this;
        if (!n.istate) return -2;
        const e = n.istate.inflateEnd(n);
        return (n.istate = null), e;
      },
      inflateSync: function () {
        const n = this;
        return n.istate ? n.istate.inflateSync(n) : -2;
      },
      inflateSetDictionary: function (n, e) {
        const t = this;
        return t.istate ? t.istate.inflateSetDictionary(t, n, e) : -2;
      },
      read_byte: function (n) {
        return this.next_in[n];
      },
      read_buf: function (n, e) {
        return this.next_in.subarray(n, n + e);
      },
    };
    const an = {
        chunkSize: 524288,
        maxWorkers: (typeof navigator != 'undefined' && navigator.hardwareConcurrency) || 2,
        terminateWorkerTimeout: 5e3,
        useWebWorkers: !0,
        workerScripts: void 0,
      },
      X = Object.assign({}, an);
    function Xt(n) {
      if (
        (n.baseURL !== void 0 && (X.baseURL = n.baseURL),
        n.chunkSize !== void 0 && (X.chunkSize = n.chunkSize),
        n.maxWorkers !== void 0 && (X.maxWorkers = n.maxWorkers),
        n.terminateWorkerTimeout !== void 0 && (X.terminateWorkerTimeout = n.terminateWorkerTimeout),
        n.useWebWorkers !== void 0 && (X.useWebWorkers = n.useWebWorkers),
        n.Deflate !== void 0 && (X.Deflate = n.Deflate),
        n.Inflate !== void 0 && (X.Inflate = n.Inflate),
        n.workerScripts !== void 0)
      ) {
        if (n.workerScripts.deflate) {
          if (!Array.isArray(n.workerScripts.deflate)) throw new Error('workerScripts.deflate must be an array');
          X.workerScripts || (X.workerScripts = {}), (X.workerScripts.deflate = n.workerScripts.deflate);
        }
        if (n.workerScripts.inflate) {
          if (!Array.isArray(n.workerScripts.inflate)) throw new Error('workerScripts.inflate must be an array');
          X.workerScripts || (X.workerScripts = {}), (X.workerScripts.inflate = n.workerScripts.inflate);
        }
      }
    }
    const Jt = 'Abort error';
    function Tt(n, e) {
      if (n && n.aborted) throw (e.flush(), new Error(Jt));
    }
    async function te(n, e) {
      return e.length && (await n.writeUint8Array(e)), e.length;
    }
    const ee = 'HTTP error ',
      Ct = 'HTTP Range not supported',
      Ft = 'text/plain',
      Dt = 'GET',
      on = 'bytes';
    class ne {
      constructor() {
        this.size = 0;
      }
      init() {
        this.initialized = !0;
      }
    }
    class st extends ne {}
    class mt extends ne {
      writeUint8Array(e) {
        this.size += e.length;
      }
    }
    class re extends st {
      constructor(e) {
        super(), (this.blob = e), (this.size = e.size);
      }
      async readUint8Array(e, t) {
        if (this.blob.arrayBuffer) return new Uint8Array(await this.blob.slice(e, e + t).arrayBuffer());
        {
          const r = new FileReader();
          return new Promise((a, l) => {
            (r.onload = (d) => a(new Uint8Array(d.target.result))),
              (r.onerror = () => l(r.error)),
              r.readAsArrayBuffer(this.blob.slice(e, e + t));
          });
        }
      }
    }
    class cn extends st {
      constructor(e, t) {
        super(),
          (this.url = e),
          (this.preventHeadRequest = t.preventHeadRequest),
          (this.useRangeHeader = t.useRangeHeader),
          (this.forceRangeRequests = t.forceRangeRequests),
          (this.options = Object.assign({}, t)),
          delete this.options.preventHeadRequest,
          delete this.options.useRangeHeader,
          delete this.options.forceRangeRequests,
          delete this.options.useXHR;
      }
      async init() {
        super.init(), await ie(this, It, oe);
      }
      async readUint8Array(e, t) {
        return se(this, e, t, It, oe);
      }
    }
    class ln extends st {
      constructor(e, t) {
        super(),
          (this.url = e),
          (this.preventHeadRequest = t.preventHeadRequest),
          (this.useRangeHeader = t.useRangeHeader),
          (this.forceRangeRequests = t.forceRangeRequests),
          (this.options = t);
      }
      async init() {
        super.init(), await ie(this, Mt, ce);
      }
      async readUint8Array(e, t) {
        return se(this, e, t, Mt, ce);
      }
    }
    async function ie(n, e, t) {
      if (
        (function (r) {
          if (typeof document != 'undefined') {
            const a = document.createElement('a');
            return (a.href = r), a.protocol == 'http:' || a.protocol == 'https:';
          }
          return /^https?:\/\//i.test(r);
        })(n.url) &&
        (n.useRangeHeader || n.forceRangeRequests)
      ) {
        const r = await e(Dt, n, ae(n));
        if (!n.forceRangeRequests && r.headers.get('Accept-Ranges') != on) throw new Error(Ct);
        {
          let a;
          const l = r.headers.get('Content-Range');
          if (l) {
            const d = l.trim().split(/\s*\/\s*/);
            if (d.length) {
              const _ = d[1];
              _ && _ != '*' && (a = Number(_));
            }
          }
          a === void 0 ? await de(n, e, t) : (n.size = a);
        }
      } else await de(n, e, t);
    }
    async function se(n, e, t, r, a) {
      if (n.useRangeHeader || n.forceRangeRequests) {
        const l = await r(Dt, n, ae(n, e, t));
        if (l.status != 206) throw new Error(Ct);
        return new Uint8Array(await l.arrayBuffer());
      }
      return n.data || (await a(n, n.options)), new Uint8Array(n.data.subarray(e, e + t));
    }
    function ae(n, e = 0, t = 1) {
      return Object.assign({}, zt(n), { Range: 'bytes=' + e + '-' + (e + t - 1) });
    }
    function zt(n) {
      let e = n.options.headers;
      if (e) return Symbol.iterator in e ? Object.fromEntries(e) : e;
    }
    async function oe(n) {
      await le(n, It);
    }
    async function ce(n) {
      await le(n, Mt);
    }
    async function le(n, e) {
      const t = await e(Dt, n, zt(n));
      (n.data = new Uint8Array(await t.arrayBuffer())), n.size || (n.size = n.data.length);
    }
    async function de(n, e, t) {
      if (n.preventHeadRequest) await t(n, n.options);
      else {
        const r = (await e('HEAD', n, zt(n))).headers.get('Content-Length');
        r ? (n.size = Number(r)) : await t(n, n.options);
      }
    }
    async function It(n, { options: e, url: t }, r) {
      const a = await fetch(t, Object.assign({}, e, { method: n, headers: r }));
      if (a.status < 400) return a;
      throw new Error(ee + (a.statusText || a.status));
    }
    function Mt(n, { url: e }, t) {
      return new Promise((r, a) => {
        const l = new XMLHttpRequest();
        if (
          (l.addEventListener(
            'load',
            () => {
              if (l.status < 400) {
                const d = [];
                l
                  .getAllResponseHeaders()
                  .trim()
                  .split(/[\r\n]+/)
                  .forEach((_) => {
                    const m = _.trim().split(/\s*:\s*/);
                    (m[0] = m[0].trim().replace(/^[a-z]|-[a-z]/g, (g) => g.toUpperCase())), d.push(m);
                  }),
                  r({ status: l.status, arrayBuffer: () => l.response, headers: new Map(d) });
              } else a(new Error(ee + (l.statusText || l.status)));
            },
            !1,
          ),
          l.addEventListener('error', (d) => a(d.detail.error), !1),
          l.open(n, e),
          t)
        )
          for (const d of Object.entries(t)) l.setRequestHeader(d[0], d[1]);
        (l.responseType = 'arraybuffer'), l.send();
      });
    }
    class ue extends st {
      constructor(e, t = {}) {
        super(), (this.url = e), t.useXHR ? (this.reader = new ln(e, t)) : (this.reader = new cn(e, t));
      }
      set size(e) {}
      get size() {
        return this.reader.size;
      }
      async init() {
        super.init(), await this.reader.init();
      }
      async readUint8Array(e, t) {
        return this.reader.readUint8Array(e, t);
      }
    }
    const vt = 4294967295,
      he = 33639248,
      fe = 101075792,
      pe = [];
    for (let n = 0; n < 256; n++) {
      let e = n;
      for (let t = 0; t < 8; t++) 1 & e ? (e = (e >>> 1) ^ 3988292384) : (e >>>= 1);
      pe[n] = e;
    }
    class yt {
      constructor(e) {
        this.crc = e || -1;
      }
      append(e) {
        let t = 0 | this.crc;
        for (let r = 0, a = 0 | e.length; r < a; r++) t = (t >>> 8) ^ pe[255 & (t ^ e[r])];
        this.crc = t;
      }
      get() {
        return ~this.crc;
      }
    }
    const J = {
        concat(n, e) {
          if (n.length === 0 || e.length === 0) return n.concat(e);
          const t = n[n.length - 1],
            r = J.getPartial(t);
          return r === 32 ? n.concat(e) : J._shiftRight(e, r, 0 | t, n.slice(0, n.length - 1));
        },
        bitLength(n) {
          const e = n.length;
          if (e === 0) return 0;
          const t = n[e - 1];
          return 32 * (e - 1) + J.getPartial(t);
        },
        clamp(n, e) {
          if (32 * n.length < e) return n;
          const t = (n = n.slice(0, Math.ceil(e / 32))).length;
          return (e &= 31), t > 0 && e && (n[t - 1] = J.partial(e, n[t - 1] & (2147483648 >> (e - 1)), 1)), n;
        },
        partial: (n, e, t) => (n === 32 ? e : (t ? 0 | e : e << (32 - n)) + 1099511627776 * n),
        getPartial: (n) => Math.round(n / 1099511627776) || 32,
        _shiftRight(n, e, t, r) {
          for (r === void 0 && (r = []); e >= 32; e -= 32) r.push(t), (t = 0);
          if (e === 0) return r.concat(n);
          for (let d = 0; d < n.length; d++) r.push(t | (n[d] >>> e)), (t = n[d] << (32 - e));
          const a = n.length ? n[n.length - 1] : 0,
            l = J.getPartial(a);
          return r.push(J.partial((e + l) & 31, e + l > 32 ? t : r.pop(), 1)), r;
        },
      },
      _e = {
        bytes: {
          fromBits(n) {
            const e = J.bitLength(n) / 8,
              t = new Uint8Array(e);
            let r;
            for (let a = 0; a < e; a++) (3 & a) == 0 && (r = n[a / 4]), (t[a] = r >>> 24), (r <<= 8);
            return t;
          },
          toBits(n) {
            const e = [];
            let t,
              r = 0;
            for (t = 0; t < n.length; t++) (r = (r << 8) | n[t]), (3 & t) == 3 && (e.push(r), (r = 0));
            return 3 & t && e.push(J.partial(8 * (3 & t), r)), e;
          },
        },
      },
      we = {
        sha1: function (n) {
          n
            ? ((this._h = n._h.slice(0)), (this._buffer = n._buffer.slice(0)), (this._length = n._length))
            : this.reset();
        },
      };
    we.sha1.prototype = {
      blockSize: 512,
      reset: function () {
        const n = this;
        return (n._h = this._init.slice(0)), (n._buffer = []), (n._length = 0), n;
      },
      update: function (n) {
        const e = this;
        typeof n == 'string' && (n = _e.utf8String.toBits(n));
        const t = (e._buffer = J.concat(e._buffer, n)),
          r = e._length,
          a = (e._length = r + J.bitLength(n));
        if (a > 9007199254740991) throw new Error('Cannot hash more than 2^53 - 1 bits');
        const l = new Uint32Array(t);
        let d = 0;
        for (let _ = e.blockSize + r - ((e.blockSize + r) & (e.blockSize - 1)); _ <= a; _ += e.blockSize)
          e._block(l.subarray(16 * d, 16 * (d + 1))), (d += 1);
        return t.splice(0, 16 * d), e;
      },
      finalize: function () {
        const n = this;
        let e = n._buffer;
        const t = n._h;
        e = J.concat(e, [J.partial(1, 1)]);
        for (let r = e.length + 2; 15 & r; r++) e.push(0);
        for (e.push(Math.floor(n._length / 4294967296)), e.push(0 | n._length); e.length; ) n._block(e.splice(0, 16));
        return n.reset(), t;
      },
      _init: [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
      _key: [1518500249, 1859775393, 2400959708, 3395469782],
      _f: function (n, e, t, r) {
        return n <= 19
          ? (e & t) | (~e & r)
          : n <= 39
          ? e ^ t ^ r
          : n <= 59
          ? (e & t) | (e & r) | (t & r)
          : n <= 79
          ? e ^ t ^ r
          : void 0;
      },
      _S: function (n, e) {
        return (e << n) | (e >>> (32 - n));
      },
      _block: function (n) {
        const e = this,
          t = e._h,
          r = Array(80);
        for (let g = 0; g < 16; g++) r[g] = n[g];
        let a = t[0],
          l = t[1],
          d = t[2],
          _ = t[3],
          m = t[4];
        for (let g = 0; g <= 79; g++) {
          g >= 16 && (r[g] = e._S(1, r[g - 3] ^ r[g - 8] ^ r[g - 14] ^ r[g - 16]));
          const v = (e._S(5, a) + e._f(g, l, d, _) + m + r[g] + e._key[Math.floor(g / 20)]) | 0;
          (m = _), (_ = d), (d = e._S(30, l)), (l = a), (a = v);
        }
        (t[0] = (t[0] + a) | 0),
          (t[1] = (t[1] + l) | 0),
          (t[2] = (t[2] + d) | 0),
          (t[3] = (t[3] + _) | 0),
          (t[4] = (t[4] + m) | 0);
      },
    };
    const dn = {
        aes: class {
          constructor(n) {
            const e = this;
            (e._tables = [
              [[], [], [], [], []],
              [[], [], [], [], []],
            ]),
              e._tables[0][0][0] || e._precompute();
            const t = e._tables[0][4],
              r = e._tables[1],
              a = n.length;
            let l,
              d,
              _,
              m = 1;
            if (a !== 4 && a !== 6 && a !== 8) throw new Error('invalid aes key size');
            for (e._key = [(d = n.slice(0)), (_ = [])], l = a; l < 4 * a + 28; l++) {
              let g = d[l - 1];
              (l % a == 0 || (a === 8 && l % a == 4)) &&
                ((g = (t[g >>> 24] << 24) ^ (t[(g >> 16) & 255] << 16) ^ (t[(g >> 8) & 255] << 8) ^ t[255 & g]),
                l % a == 0 && ((g = (g << 8) ^ (g >>> 24) ^ (m << 24)), (m = (m << 1) ^ (283 * (m >> 7))))),
                (d[l] = d[l - a] ^ g);
            }
            for (let g = 0; l; g++, l--) {
              const v = d[3 & g ? l : l - 4];
              _[g] =
                l <= 4 || g < 4
                  ? v
                  : r[0][t[v >>> 24]] ^ r[1][t[(v >> 16) & 255]] ^ r[2][t[(v >> 8) & 255]] ^ r[3][t[255 & v]];
            }
          }
          encrypt(n) {
            return this._crypt(n, 0);
          }
          decrypt(n) {
            return this._crypt(n, 1);
          }
          _precompute() {
            const n = this._tables[0],
              e = this._tables[1],
              t = n[4],
              r = e[4],
              a = [],
              l = [];
            let d, _, m, g;
            for (let v = 0; v < 256; v++) l[(a[v] = (v << 1) ^ (283 * (v >> 7))) ^ v] = v;
            for (let v = (d = 0); !t[v]; v ^= _ || 1, d = l[d] || 1) {
              let T = d ^ (d << 1) ^ (d << 2) ^ (d << 3) ^ (d << 4);
              (T = (T >> 8) ^ (255 & T) ^ 99), (t[v] = T), (r[T] = v), (g = a[(m = a[(_ = a[v])])]);
              let N = (16843009 * g) ^ (65537 * m) ^ (257 * _) ^ (16843008 * v),
                L = (257 * a[T]) ^ (16843008 * T);
              for (let s = 0; s < 4; s++) (n[s][v] = L = (L << 24) ^ (L >>> 8)), (e[s][T] = N = (N << 24) ^ (N >>> 8));
            }
            for (let v = 0; v < 5; v++) (n[v] = n[v].slice(0)), (e[v] = e[v].slice(0));
          }
          _crypt(n, e) {
            if (n.length !== 4) throw new Error('invalid aes block size');
            const t = this._key[e],
              r = t.length / 4 - 2,
              a = [0, 0, 0, 0],
              l = this._tables[e],
              d = l[0],
              _ = l[1],
              m = l[2],
              g = l[3],
              v = l[4];
            let T,
              N,
              L,
              s = n[0] ^ t[0],
              p = n[e ? 3 : 1] ^ t[1],
              i = n[2] ^ t[2],
              o = n[e ? 1 : 3] ^ t[3],
              u = 4;
            for (let w = 0; w < r; w++)
              (T = d[s >>> 24] ^ _[(p >> 16) & 255] ^ m[(i >> 8) & 255] ^ g[255 & o] ^ t[u]),
                (N = d[p >>> 24] ^ _[(i >> 16) & 255] ^ m[(o >> 8) & 255] ^ g[255 & s] ^ t[u + 1]),
                (L = d[i >>> 24] ^ _[(o >> 16) & 255] ^ m[(s >> 8) & 255] ^ g[255 & p] ^ t[u + 2]),
                (o = d[o >>> 24] ^ _[(s >> 16) & 255] ^ m[(p >> 8) & 255] ^ g[255 & i] ^ t[u + 3]),
                (u += 4),
                (s = T),
                (p = N),
                (i = L);
            for (let w = 0; w < 4; w++)
              (a[e ? 3 & -w : w] =
                (v[s >>> 24] << 24) ^ (v[(p >> 16) & 255] << 16) ^ (v[(i >> 8) & 255] << 8) ^ v[255 & o] ^ t[u++]),
                (T = s),
                (s = p),
                (p = i),
                (i = o),
                (o = T);
            return a;
          }
        },
      },
      un = {
        ctrGladman: class {
          constructor(n, e) {
            (this._prf = n), (this._initIv = e), (this._iv = e);
          }
          reset() {
            this._iv = this._initIv;
          }
          update(n) {
            return this.calculate(this._prf, n, this._iv);
          }
          incWord(n) {
            if (((n >> 24) & 255) == 255) {
              let e = (n >> 16) & 255,
                t = (n >> 8) & 255,
                r = 255 & n;
              e === 255 ? ((e = 0), t === 255 ? ((t = 0), r === 255 ? (r = 0) : ++r) : ++t) : ++e,
                (n = 0),
                (n += e << 16),
                (n += t << 8),
                (n += r);
            } else n += 1 << 24;
            return n;
          }
          incCounter(n) {
            (n[0] = this.incWord(n[0])) === 0 && (n[1] = this.incWord(n[1]));
          }
          calculate(n, e, t) {
            let r;
            if (!(r = e.length)) return [];
            const a = J.bitLength(e);
            for (let l = 0; l < r; l += 4) {
              this.incCounter(t);
              const d = n.encrypt(t);
              (e[l] ^= d[0]), (e[l + 1] ^= d[1]), (e[l + 2] ^= d[2]), (e[l + 3] ^= d[3]);
            }
            return J.clamp(e, a);
          }
        },
      },
      hn = {
        hmacSha1: class {
          constructor(n) {
            const e = this,
              t = (e._hash = we.sha1),
              r = [[], []],
              a = t.prototype.blockSize / 32;
            (e._baseHash = [new t(), new t()]), n.length > a && (n = t.hash(n));
            for (let l = 0; l < a; l++) (r[0][l] = 909522486 ^ n[l]), (r[1][l] = 1549556828 ^ n[l]);
            e._baseHash[0].update(r[0]), e._baseHash[1].update(r[1]), (e._resultHash = new t(e._baseHash[0]));
          }
          reset() {
            const n = this;
            (n._resultHash = new n._hash(n._baseHash[0])), (n._updated = !1);
          }
          update(n) {
            (this._updated = !0), this._resultHash.update(n);
          }
          digest() {
            const n = this,
              e = n._resultHash.finalize(),
              t = new n._hash(n._baseHash[1]).update(e).finalize();
            return n.reset(), t;
          }
        },
      },
      Lt = 'Invalid pasword',
      ft = 16,
      ge = { name: 'PBKDF2' },
      fn = Object.assign({ hash: { name: 'HMAC' } }, ge),
      pn = Object.assign({ iterations: 1e3, hash: { name: 'SHA-1' } }, ge),
      _n = ['deriveBits'],
      xt = [8, 12, 16],
      kt = [16, 24, 32],
      at = 10,
      be = [0, 0, 0, 0],
      nt = _e.bytes,
      me = dn.aes,
      ye = un.ctrGladman,
      xe = hn.hmacSha1;
    class wn {
      constructor(e, t, r) {
        Object.assign(this, { password: e, signed: t, strength: r - 1, pendingInput: new Uint8Array(0) });
      }
      async append(e) {
        const t = this;
        if (t.password) {
          const r = tt(e, 0, xt[t.strength] + 2);
          await (async function (a, l, d) {
            await ve(a, d, tt(l, 0, xt[a.strength]));
            const _ = tt(l, xt[a.strength]),
              m = a.keys.passwordVerification;
            if (m[0] != _[0] || m[1] != _[1]) throw new Error(Lt);
          })(t, r, t.password),
            (t.password = null),
            (t.aesCtrGladman = new ye(new me(t.keys.key), Array.from(be))),
            (t.hmac = new xe(t.keys.authentication)),
            (e = tt(e, xt[t.strength] + 2));
        }
        return ke(t, e, new Uint8Array(e.length - at - ((e.length - at) % ft)), 0, at, !0);
      }
      flush() {
        const e = this,
          t = e.pendingInput,
          r = tt(t, 0, t.length - at),
          a = tt(t, t.length - at);
        let l = new Uint8Array(0);
        if (r.length) {
          const _ = nt.toBits(r);
          e.hmac.update(_);
          const m = e.aesCtrGladman.update(_);
          l = nt.fromBits(m);
        }
        let d = !0;
        if (e.signed) {
          const _ = tt(nt.fromBits(e.hmac.digest()), 0, at);
          for (let m = 0; m < at; m++) _[m] != a[m] && (d = !1);
        }
        return { valid: d, data: l };
      }
    }
    class gn {
      constructor(e, t) {
        Object.assign(this, { password: e, strength: t - 1, pendingInput: new Uint8Array(0) });
      }
      async append(e) {
        const t = this;
        let r = new Uint8Array(0);
        t.password &&
          ((r = await (async function (l, d) {
            const _ = crypto.getRandomValues(new Uint8Array(xt[l.strength]));
            return await ve(l, d, _), Ot(_, l.keys.passwordVerification);
          })(t, t.password)),
          (t.password = null),
          (t.aesCtrGladman = new ye(new me(t.keys.key), Array.from(be))),
          (t.hmac = new xe(t.keys.authentication)));
        const a = new Uint8Array(r.length + e.length - (e.length % ft));
        return a.set(r, 0), ke(t, e, a, r.length, 0);
      }
      flush() {
        const e = this;
        let t = new Uint8Array(0);
        if (e.pendingInput.length) {
          const a = e.aesCtrGladman.update(nt.toBits(e.pendingInput));
          e.hmac.update(a), (t = nt.fromBits(a));
        }
        const r = tt(nt.fromBits(e.hmac.digest()), 0, at);
        return { data: Ot(t, r), signature: r };
      }
    }
    function ke(n, e, t, r, a, l) {
      const d = e.length - a;
      let _;
      for (
        n.pendingInput.length &&
          ((e = Ot(n.pendingInput, e)),
          (t = (function (m, g) {
            if (g && g > m.length) {
              const v = m;
              (m = new Uint8Array(g)).set(v, 0);
            }
            return m;
          })(t, d - (d % ft)))),
          _ = 0;
        _ <= d - ft;
        _ += ft
      ) {
        const m = nt.toBits(tt(e, _, _ + ft));
        l && n.hmac.update(m);
        const g = n.aesCtrGladman.update(m);
        l || n.hmac.update(g), t.set(nt.fromBits(g), _ + r);
      }
      return (n.pendingInput = tt(e, _)), t;
    }
    async function ve(n, e, t) {
      const r = (function (_) {
          if (typeof TextEncoder == 'undefined') {
            _ = unescape(encodeURIComponent(_));
            const m = new Uint8Array(_.length);
            for (let g = 0; g < m.length; g++) m[g] = _.charCodeAt(g);
            return m;
          }
          return new TextEncoder().encode(_);
        })(e),
        a = await crypto.subtle.importKey('raw', r, fn, !1, _n),
        l = await crypto.subtle.deriveBits(Object.assign({ salt: t }, pn), a, 8 * (2 * kt[n.strength] + 2)),
        d = new Uint8Array(l);
      n.keys = {
        key: nt.toBits(tt(d, 0, kt[n.strength])),
        authentication: nt.toBits(tt(d, kt[n.strength], 2 * kt[n.strength])),
        passwordVerification: tt(d, 2 * kt[n.strength]),
      };
    }
    function Ot(n, e) {
      let t = n;
      return n.length + e.length && ((t = new Uint8Array(n.length + e.length)), t.set(n, 0), t.set(e, n.length)), t;
    }
    function tt(n, e, t) {
      return n.subarray(e, t);
    }
    const St = 12;
    class bn {
      constructor(e, t) {
        Object.assign(this, { password: e, passwordVerification: t }), Ae(this, e);
      }
      append(e) {
        const t = this;
        if (t.password) {
          const r = Se(t, e.subarray(0, St));
          if (((t.password = null), r[11] != t.passwordVerification)) throw new Error(Lt);
          e = e.subarray(St);
        }
        return Se(t, e);
      }
      flush() {
        return { valid: !0, data: new Uint8Array(0) };
      }
    }
    class mn {
      constructor(e, t) {
        Object.assign(this, { password: e, passwordVerification: t }), Ae(this, e);
      }
      append(e) {
        const t = this;
        let r, a;
        if (t.password) {
          t.password = null;
          const l = crypto.getRandomValues(new Uint8Array(St));
          (l[11] = t.passwordVerification), (r = new Uint8Array(e.length + l.length)), r.set(Ee(t, l), 0), (a = St);
        } else (r = new Uint8Array(e.length)), (a = 0);
        return r.set(Ee(t, e), a), r;
      }
      flush() {
        return { data: new Uint8Array(0) };
      }
    }
    function Se(n, e) {
      const t = new Uint8Array(e.length);
      for (let r = 0; r < e.length; r++) (t[r] = Re(n) ^ e[r]), Wt(n, t[r]);
      return t;
    }
    function Ee(n, e) {
      const t = new Uint8Array(e.length);
      for (let r = 0; r < e.length; r++) (t[r] = Re(n) ^ e[r]), Wt(n, e[r]);
      return t;
    }
    function Ae(n, e) {
      (n.keys = [305419896, 591751049, 878082192]), (n.crcKey0 = new yt(n.keys[0])), (n.crcKey2 = new yt(n.keys[2]));
      for (let t = 0; t < e.length; t++) Wt(n, e.charCodeAt(t));
    }
    function Wt(n, e) {
      n.crcKey0.append([e]),
        (n.keys[0] = ~n.crcKey0.get()),
        (n.keys[1] = Te(n.keys[1] + Ue(n.keys[0]))),
        (n.keys[1] = Te(Math.imul(n.keys[1], 134775813) + 1)),
        n.crcKey2.append([n.keys[1] >>> 24]),
        (n.keys[2] = ~n.crcKey2.get());
    }
    function Re(n) {
      const e = 2 | n.keys[2];
      return Ue(Math.imul(e, 1 ^ e) >>> 8);
    }
    function Ue(n) {
      return 255 & n;
    }
    function Te(n) {
      return 4294967295 & n;
    }
    const Ce = 'inflate',
      Bt = 'Invalid signature';
    class yn {
      constructor(
        e,
        {
          signature: t,
          password: r,
          signed: a,
          compressed: l,
          zipCrypto: d,
          passwordVerification: _,
          encryptionStrength: m,
        },
        { chunkSize: g },
      ) {
        const v = Boolean(r);
        Object.assign(this, {
          signature: t,
          encrypted: v,
          signed: a,
          compressed: l,
          inflate: l && new e({ chunkSize: g }),
          crc32: a && new yt(),
          zipCrypto: d,
          decrypt: v && d ? new bn(r, _) : new wn(r, a, m),
        });
      }
      async append(e) {
        const t = this;
        return (
          t.encrypted && e.length && (e = await t.decrypt.append(e)),
          t.compressed && e.length && (e = await t.inflate.append(e)),
          (!t.encrypted || t.zipCrypto) && t.signed && e.length && t.crc32.append(e),
          e
        );
      }
      async flush() {
        const e = this;
        let t,
          r = new Uint8Array(0);
        if (e.encrypted) {
          const a = e.decrypt.flush();
          if (!a.valid) throw new Error(Bt);
          r = a.data;
        }
        if ((!e.encrypted || e.zipCrypto) && e.signed) {
          const a = new DataView(new Uint8Array(4).buffer);
          if (((t = e.crc32.get()), a.setUint32(0, t), e.signature != a.getUint32(0, !1))) throw new Error(Bt);
        }
        return (
          e.compressed && ((r = (await e.inflate.append(r)) || new Uint8Array(0)), await e.inflate.flush()),
          { data: r, signature: t }
        );
      }
    }
    class xn {
      constructor(
        e,
        {
          encrypted: t,
          signed: r,
          compressed: a,
          level: l,
          zipCrypto: d,
          password: _,
          passwordVerification: m,
          encryptionStrength: g,
        },
        { chunkSize: v },
      ) {
        Object.assign(this, {
          encrypted: t,
          signed: r,
          compressed: a,
          deflate: a && new e({ level: l || 5, chunkSize: v }),
          crc32: r && new yt(),
          zipCrypto: d,
          encrypt: t && d ? new mn(_, m) : new gn(_, g),
        });
      }
      async append(e) {
        const t = this;
        let r = e;
        return (
          t.compressed && e.length && (r = await t.deflate.append(e)),
          t.encrypted && r.length && (r = await t.encrypt.append(r)),
          (!t.encrypted || t.zipCrypto) && t.signed && e.length && t.crc32.append(e),
          r
        );
      }
      async flush() {
        const e = this;
        let t,
          r = new Uint8Array(0);
        if ((e.compressed && (r = (await e.deflate.flush()) || new Uint8Array(0)), e.encrypted)) {
          r = await e.encrypt.append(r);
          const a = e.encrypt.flush();
          t = a.signature;
          const l = new Uint8Array(r.length + a.data.length);
          l.set(r, 0), l.set(a.data, r.length), (r = l);
        }
        return (e.encrypted && !e.zipCrypto) || !e.signed || (t = e.crc32.get()), { data: r, signature: t };
      }
    }
    const Fe = 'init',
      De = 'append',
      Nt = 'flush',
      kn = 'message';
    let ze = !0;
    var Pt = (n, e, t, r, a, l, d) => (
      Object.assign(n, {
        busy: !0,
        codecConstructor: e,
        options: Object.assign({}, t),
        scripts: d,
        terminate() {
          n.worker && !n.busy && (n.worker.terminate(), (n.interface = null));
        },
        onTaskFinished() {
          (n.busy = !1), a(n);
        },
      }),
      l
        ? (function (_, m) {
            let g;
            const v = { type: 'module' };
            if (!_.interface) {
              if (ze)
                try {
                  _.worker = T({}, m.baseURL);
                } catch {
                  (ze = !1), (_.worker = T(v, m.baseURL));
                }
              else _.worker = T(v, m.baseURL);
              _.worker.addEventListener(kn, s, !1),
                (_.interface = { append: (p) => N({ type: De, data: p }), flush: () => N({ type: Nt }) });
            }
            return _.interface;
            function T(p, i) {
              let o;
              try {
                o = new URL(_.scripts[0], i);
              } catch {
                o = _.scripts[0];
              }
              return new Worker(o, p);
            }
            async function N(p) {
              if (!g) {
                const i = _.options,
                  o = _.scripts.slice(1);
                await L({ scripts: o, type: Fe, options: i, config: { chunkSize: m.chunkSize } });
              }
              return L(p);
            }
            function L(p) {
              const i = _.worker,
                o = new Promise((u, w) => (g = { resolve: u, reject: w }));
              try {
                if (p.data)
                  try {
                    (p.data = p.data.buffer), i.postMessage(p, [p.data]);
                  } catch {
                    i.postMessage(p);
                  }
                else i.postMessage(p);
              } catch (u) {
                g.reject(u), (g = null), _.onTaskFinished();
              }
              return o;
            }
            function s(p) {
              const i = p.data;
              if (g) {
                const o = i.error,
                  u = i.type;
                if (o) {
                  const w = new Error(o.message);
                  (w.stack = o.stack), g.reject(w), (g = null), _.onTaskFinished();
                } else if (u == Fe || u == Nt || u == De) {
                  const w = i.data;
                  u == Nt
                    ? (g.resolve({ data: new Uint8Array(w), signature: i.signature }), (g = null), _.onTaskFinished())
                    : g.resolve(w && new Uint8Array(w));
                }
              }
            }
          })(n, r)
        : (function (_, m) {
            const g = (function (v, T, N) {
              return T.codecType.startsWith('deflate')
                ? new xn(v, T, N)
                : T.codecType.startsWith(Ce)
                ? new yn(v, T, N)
                : void 0;
            })(_.codecConstructor, _.options, m);
            return {
              async append(v) {
                try {
                  return await g.append(v);
                } catch (T) {
                  throw (_.onTaskFinished(), T);
                }
              },
              async flush() {
                try {
                  return await g.flush();
                } finally {
                  _.onTaskFinished();
                }
              },
            };
          })(n, r)
    );
    let ut = [],
      Ht = [];
    function Ie(n) {
      n.terminateTimeout && (clearTimeout(n.terminateTimeout), (n.terminateTimeout = null));
    }
    const vn =
      '\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 '.split(
        '',
      );
    async function jt(n, e) {
      if (e && e.trim().toLowerCase() == 'cp437')
        return ((t) => {
          let r = '';
          for (let a = 0; a < t.length; a++) r += vn[t[a]];
          return r;
        })(n);
      if (typeof TextDecoder == 'undefined') {
        const t = new FileReader();
        return new Promise((r, a) => {
          (t.onload = (l) => r(l.target.result)), (t.onerror = () => a(t.error)), t.readAsText(new Blob([n]));
        });
      }
      return new TextDecoder(e).decode(n);
    }
    const Sn = [
      'filename',
      'rawFilename',
      'directory',
      'encrypted',
      'compressedSize',
      'uncompressedSize',
      'lastModDate',
      'rawLastModDate',
      'comment',
      'rawComment',
      'signature',
      'extraField',
      'rawExtraField',
      'bitFlag',
      'extraFieldZip64',
      'extraFieldUnicodePath',
      'extraFieldUnicodeComment',
      'extraFieldAES',
      'filenameUTF8',
      'commentUTF8',
      'offset',
      'zip64',
      'compressionMethod',
      'extraFieldNTFS',
      'lastAccessDate',
      'creationDate',
      'extraFieldExtendedTimestamp',
      'version',
      'versionMadeBy',
      'msDosCompatible',
      'internalFileAttribute',
      'externalFileAttribute',
    ];
    class Me {
      constructor(e) {
        Sn.forEach((t) => (this[t] = e[t]));
      }
    }
    const Et = 'File format is not recognized',
      Le = 'End of central directory not found',
      Oe = 'End of Zip64 central directory not found',
      We = 'End of Zip64 central directory locator not found',
      Be = 'Central directory header not found',
      Ne = 'Local file header not found',
      Pe = 'Zip64 extra field not found',
      He = 'File contains encrypted entry',
      je = 'Encryption method not supported',
      qt = 'Compression method not supported',
      qe = 'utf-8',
      Ve = 'cp437',
      Ge = ['uncompressedSize', 'compressedSize', 'offset'];
    class En {
      constructor(e, t, r) {
        Object.assign(this, { reader: e, config: t, options: r });
      }
      async getData(e, t, r = {}) {
        const a = this,
          {
            reader: l,
            offset: d,
            extraFieldAES: _,
            compressionMethod: m,
            config: g,
            bitFlag: v,
            signature: T,
            rawLastModDate: N,
            compressedSize: L,
          } = a,
          s = (a.localDirectory = {});
        l.initialized || (await l.init());
        let p = await ot(l, d, 30);
        const i = Y(p);
        let o = pt(a, r, 'password');
        if (((o = o && o.length && o), _ && _.originalCompressionMethod != 99)) throw new Error(qt);
        if (m != 0 && m != 8) throw new Error(qt);
        if (Q(i, 0) != 67324752) throw new Error(Ne);
        $e(s, i, 4),
          (p = await ot(l, d, 30 + s.filenameLength + s.extraFieldLength)),
          (s.rawExtraField = p.subarray(30 + s.filenameLength)),
          await Ke(a, s, i, 4),
          (t.lastAccessDate = s.lastAccessDate),
          (t.creationDate = s.creationDate);
        const u = a.encrypted && s.encrypted,
          w = u && !_;
        if (u) {
          if (!w && _.strength === void 0) throw new Error(je);
          if (!o) throw new Error(He);
        }
        const S = await (function (h, y, C) {
          const U =
              !(!y.compressed && !y.signed && !y.encrypted) &&
              (y.useWebWorkers || (y.useWebWorkers === void 0 && C.useWebWorkers)),
            A = U && C.workerScripts ? C.workerScripts[y.codecType] : [];
          if (ut.length < C.maxWorkers) {
            const F = {};
            return ut.push(F), Pt(F, h, y, C, E, U, A);
          }
          {
            const F = ut.find((O) => !O.busy);
            return F
              ? (Ie(F), Pt(F, h, y, C, E, U, A))
              : new Promise((O) => Ht.push({ resolve: O, codecConstructor: h, options: y, webWorker: U, scripts: A }));
          }
          function E(F) {
            if (Ht.length) {
              const [{ resolve: O, codecConstructor: V, options: z, webWorker: q, scripts: ct }] = Ht.splice(0, 1);
              O(Pt(F, V, z, C, E, q, ct));
            } else
              F.worker
                ? (Ie(F),
                  Number.isFinite(C.terminateWorkerTimeout) &&
                    C.terminateWorkerTimeout >= 0 &&
                    (F.terminateTimeout = setTimeout(() => {
                      (ut = ut.filter((O) => O != F)), F.terminate();
                    }, C.terminateWorkerTimeout)))
                : (ut = ut.filter((O) => O != F));
          }
        })(
          g.Inflate,
          {
            codecType: Ce,
            password: o,
            zipCrypto: w,
            encryptionStrength: _ && _.strength,
            signed: pt(a, r, 'checkSignature'),
            passwordVerification: w && (v.dataDescriptor ? (N >>> 8) & 255 : (T >>> 24) & 255),
            signature: T,
            compressed: m != 0,
            encrypted: u,
            useWebWorkers: pt(a, r, 'useWebWorkers'),
          },
          g,
        );
        e.initialized || (await e.init());
        const x = pt(a, r, 'signal'),
          b = d + 30 + s.filenameLength + s.extraFieldLength;
        return (
          await (async function (h, y, C, U, A, E, F) {
            const O = Math.max(E.chunkSize, 64);
            return (async function V(z = 0, q = 0) {
              const ct = F.signal;
              if (z < A) {
                Tt(ct, h);
                const lt = await y.readUint8Array(z + U, Math.min(O, A - z)),
                  P = lt.length;
                Tt(ct, h);
                const wt = await h.append(lt);
                if ((Tt(ct, h), (q += await te(C, wt)), F.onprogress))
                  try {
                    F.onprogress(z + P, A);
                  } catch {}
                return V(z + O, q);
              }
              {
                const lt = await h.flush();
                return (q += await te(C, lt.data)), { signature: lt.signature, length: q };
              }
            })();
          })(S, l, e, b, L, g, { onprogress: r.onprogress, signal: x }),
          e.getData()
        );
      }
    }
    function $e(n, e, t) {
      const r = (n.rawBitFlag = et(e, t + 2)),
        a = (1 & r) == 1,
        l = Q(e, t + 6);
      Object.assign(n, {
        encrypted: a,
        version: et(e, t),
        bitFlag: { level: (6 & r) >> 1, dataDescriptor: (8 & r) == 8, languageEncodingFlag: (2048 & r) == 2048 },
        rawLastModDate: l,
        lastModDate: An(l),
        filenameLength: et(e, t + 22),
        extraFieldLength: et(e, t + 24),
      });
    }
    async function Ke(n, e, t, r) {
      const a = e.rawExtraField,
        l = (e.extraField = new Map()),
        d = Y(new Uint8Array(a));
      let _ = 0;
      try {
        for (; _ < a.length; ) {
          const p = et(d, _),
            i = et(d, _ + 2);
          l.set(p, { type: p, data: a.slice(_ + 4, _ + 4 + i) }), (_ += 4 + i);
        }
      } catch {}
      const m = et(t, r + 4);
      (e.signature = Q(t, r + 10)), (e.uncompressedSize = Q(t, r + 18)), (e.compressedSize = Q(t, r + 14));
      const g = l.get(1);
      g &&
        ((function (p, i) {
          i.zip64 = !0;
          const o = Y(p.data);
          p.values = [];
          for (let w = 0; w < Math.floor(p.data.length / 8); w++) p.values.push(At(o, 0 + 8 * w));
          const u = Ge.filter((w) => i[w] == vt);
          for (let w = 0; w < u.length; w++) p[u[w]] = p.values[w];
          Ge.forEach((w) => {
            if (i[w] == vt) {
              if (p[w] === void 0) throw new Error(Pe);
              i[w] = p[w];
            }
          });
        })(g, e),
        (e.extraFieldZip64 = g));
      const v = l.get(28789);
      v && (await Qe(v, 'filename', 'rawFilename', e, n), (e.extraFieldUnicodePath = v));
      const T = l.get(25461);
      T && (await Qe(T, 'comment', 'rawComment', e, n), (e.extraFieldUnicodeComment = T));
      const N = l.get(39169);
      N
        ? ((function (p, i, o) {
            const u = Y(p.data);
            (p.vendorVersion = _t(u, 0)), (p.vendorId = _t(u, 2));
            const w = _t(u, 4);
            (p.strength = w), (p.originalCompressionMethod = o), (i.compressionMethod = p.compressionMethod = et(u, 5));
          })(N, e, m),
          (e.extraFieldAES = N))
        : (e.compressionMethod = m);
      const L = l.get(10);
      L &&
        ((function (p, i) {
          const o = Y(p.data);
          let u,
            w = 4;
          try {
            for (; w < p.data.length && !u; ) {
              const S = et(o, w),
                x = et(o, w + 2);
              S == 1 && (u = p.data.slice(w + 4, w + 4 + x)), (w += 4 + x);
            }
          } catch {}
          try {
            if (u && u.length == 24) {
              const S = Y(u),
                x = S.getBigUint64(0, !0),
                b = S.getBigUint64(8, !0),
                h = S.getBigUint64(16, !0);
              Object.assign(p, { rawLastModDate: x, rawLastAccessDate: b, rawCreationDate: h });
              const y = Vt(x),
                C = Vt(b),
                U = { lastModDate: y, lastAccessDate: C, creationDate: Vt(h) };
              Object.assign(p, U), Object.assign(i, U);
            }
          } catch {}
        })(L, e),
        (e.extraFieldNTFS = L));
      const s = l.get(21589);
      s &&
        ((function (p, i) {
          const o = Y(p.data),
            u = _t(o, 0),
            w = [],
            S = [];
          (1 & u) == 1 && (w.push('lastModDate'), S.push('rawLastModDate')),
            (2 & u) == 2 && (w.push('lastAccessDate'), S.push('rawLastAccessDate')),
            (4 & u) == 4 && (w.push('creationDate'), S.push('rawCreationDate'));
          let x = 1;
          w.forEach((b, h) => {
            if (p.data.length >= x + 4) {
              const y = Q(o, x);
              i[b] = p[b] = new Date(1e3 * y);
              const C = S[h];
              p[C] = y;
            }
            x += 4;
          });
        })(s, e),
        (e.extraFieldExtendedTimestamp = s));
    }
    async function Qe(n, e, t, r, a) {
      const l = Y(n.data);
      (n.version = _t(l, 0)), (n.signature = Q(l, 1));
      const d = new yt();
      d.append(a[t]);
      const _ = Y(new Uint8Array(4));
      _.setUint32(0, d.get(), !0),
        (n[e] = await jt(n.data.subarray(5))),
        (n.valid = !a.bitFlag.languageEncodingFlag && n.signature == Q(_, 0)),
        n.valid && ((r[e] = n[e]), (r[e + 'UTF8'] = !0));
    }
    function pt(n, e, t) {
      return e[t] === void 0 ? n.options[t] : e[t];
    }
    function An(n) {
      const e = (4294901760 & n) >> 16,
        t = 65535 & n;
      try {
        return new Date(
          1980 + ((65024 & e) >> 9),
          ((480 & e) >> 5) - 1,
          31 & e,
          (63488 & t) >> 11,
          (2016 & t) >> 5,
          2 * (31 & t),
          0,
        );
      } catch {}
    }
    function Vt(n) {
      return new Date(Number(n / BigInt(1e4) - BigInt(116444736e5)));
    }
    function _t(n, e) {
      return n.getUint8(e);
    }
    function et(n, e) {
      return n.getUint16(e, !0);
    }
    function Q(n, e) {
      return n.getUint32(e, !0);
    }
    function At(n, e) {
      return Number(n.getBigUint64(e, !0));
    }
    function Y(n) {
      return new DataView(n.buffer);
    }
    function ot(n, e, t) {
      return n.readUint8Array(e, t);
    }
    Xt({
      Inflate: function (n) {
        const e = new Yt(),
          t = n && n.chunkSize ? Math.floor(2 * n.chunkSize) : 131072,
          r = new Uint8Array(t);
        let a = !1;
        e.inflateInit(),
          (e.next_out = r),
          (this.append = function (l, d) {
            const _ = [];
            let m,
              g,
              v = 0,
              T = 0,
              N = 0;
            if (l.length !== 0) {
              (e.next_in_index = 0), (e.next_in = l), (e.avail_in = l.length);
              do {
                if (
                  ((e.next_out_index = 0),
                  (e.avail_out = t),
                  e.avail_in !== 0 || a || ((e.next_in_index = 0), (a = !0)),
                  (m = e.inflate(0)),
                  a && m === -5)
                ) {
                  if (e.avail_in !== 0) throw new Error('inflating: bad input');
                } else if (m !== 0 && m !== 1) throw new Error('inflating: ' + e.msg);
                if ((a || m === 1) && e.avail_in === l.length) throw new Error('inflating: bad input');
                e.next_out_index &&
                  (e.next_out_index === t ? _.push(new Uint8Array(r)) : _.push(r.slice(0, e.next_out_index))),
                  (N += e.next_out_index),
                  d && e.next_in_index > 0 && e.next_in_index != v && (d(e.next_in_index), (v = e.next_in_index));
              } while (e.avail_in > 0 || e.avail_out === 0);
              return (
                _.length > 1
                  ? ((g = new Uint8Array(N)),
                    _.forEach(function (L) {
                      g.set(L, T), (T += L.length);
                    }))
                  : (g = _[0] || new Uint8Array(0)),
                g
              );
            }
          }),
          (this.flush = function () {
            e.inflateEnd();
          });
      },
    }),
      (c.BlobReader = re),
      (c.BlobWriter = class extends mt {
        constructor(n) {
          super(), (this.contentType = n), (this.arrayBuffers = []);
        }
        async writeUint8Array(n) {
          super.writeUint8Array(n), this.arrayBuffers.push(n.buffer);
        }
        getData() {
          return this.blob || (this.blob = new Blob(this.arrayBuffers, { type: this.contentType })), this.blob;
        }
      }),
      (c.Data64URIReader = class extends st {
        constructor(n) {
          super(), (this.dataURI = n);
          let e = n.length;
          for (; n.charAt(e - 1) == '='; ) e--;
          (this.dataStart = n.indexOf(',') + 1), (this.size = Math.floor(0.75 * (e - this.dataStart)));
        }
        async readUint8Array(n, e) {
          const t = new Uint8Array(e),
            r = 4 * Math.floor(n / 3),
            a = atob(this.dataURI.substring(r + this.dataStart, 4 * Math.ceil((n + e) / 3) + this.dataStart)),
            l = n - 3 * Math.floor(r / 4);
          for (let d = l; d < l + e; d++) t[d - l] = a.charCodeAt(d);
          return t;
        }
      }),
      (c.Data64URIWriter = class extends mt {
        constructor(n) {
          super(), (this.data = 'data:' + (n || '') + ';base64,'), (this.pending = []);
        }
        async writeUint8Array(n) {
          super.writeUint8Array(n);
          let e = 0,
            t = this.pending;
          const r = this.pending.length;
          for (this.pending = '', e = 0; e < 3 * Math.floor((r + n.length) / 3) - r; e++)
            t += String.fromCharCode(n[e]);
          for (; e < n.length; e++) this.pending += String.fromCharCode(n[e]);
          t.length > 2 ? (this.data += btoa(t)) : (this.pending = t);
        }
        getData() {
          return this.data + btoa(this.pending);
        }
      }),
      (c.ERR_ABORT = Jt),
      (c.ERR_BAD_FORMAT = Et),
      (c.ERR_CENTRAL_DIRECTORY_NOT_FOUND = Be),
      (c.ERR_ENCRYPTED = He),
      (c.ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND = We),
      (c.ERR_EOCDR_NOT_FOUND = Le),
      (c.ERR_EOCDR_ZIP64_NOT_FOUND = Oe),
      (c.ERR_EXTRAFIELD_ZIP64_NOT_FOUND = Pe),
      (c.ERR_HTTP_RANGE = Ct),
      (c.ERR_INVALID_PASSWORD = Lt),
      (c.ERR_INVALID_SIGNATURE = Bt),
      (c.ERR_LOCAL_FILE_HEADER_NOT_FOUND = Ne),
      (c.ERR_UNSUPPORTED_COMPRESSION = qt),
      (c.ERR_UNSUPPORTED_ENCRYPTION = je),
      (c.HttpRangeReader = class extends ue {
        constructor(n, e = {}) {
          (e.useRangeHeader = !0), super(n, e);
        }
      }),
      (c.HttpReader = ue),
      (c.Reader = st),
      (c.TextReader = class extends st {
        constructor(n) {
          super(), (this.blobReader = new re(new Blob([n], { type: Ft })));
        }
        async init() {
          super.init(), this.blobReader.init(), (this.size = this.blobReader.size);
        }
        async readUint8Array(n, e) {
          return this.blobReader.readUint8Array(n, e);
        }
      }),
      (c.TextWriter = class extends mt {
        constructor(n) {
          super(), (this.encoding = n), (this.blob = new Blob([], { type: Ft }));
        }
        async writeUint8Array(n) {
          super.writeUint8Array(n), (this.blob = new Blob([this.blob, n.buffer], { type: Ft }));
        }
        getData() {
          if (this.blob.text) return this.blob.text();
          {
            const n = new FileReader();
            return new Promise((e, t) => {
              (n.onload = (r) => e(r.target.result)),
                (n.onerror = () => t(n.error)),
                n.readAsText(this.blob, this.encoding);
            });
          }
        }
      }),
      (c.Uint8ArrayReader = class extends st {
        constructor(n) {
          super(), (this.array = n), (this.size = n.length);
        }
        async readUint8Array(n, e) {
          return this.array.slice(n, n + e);
        }
      }),
      (c.Uint8ArrayWriter = class extends mt {
        constructor() {
          super(), (this.array = new Uint8Array(0));
        }
        async writeUint8Array(n) {
          super.writeUint8Array(n);
          const e = this.array;
          (this.array = new Uint8Array(e.length + n.length)), this.array.set(e), this.array.set(n, e.length);
        }
        getData() {
          return this.array;
        }
      }),
      (c.Writer = mt),
      (c.ZipReader = class {
        constructor(n, e = {}) {
          Object.assign(this, { reader: n, options: e, config: X });
        }
        async getEntries(n = {}) {
          const e = this,
            t = e.reader;
          if ((t.initialized || (await t.init()), t.size < 22)) throw new Error(Et);
          const r = await (async function (L, s, p, i, o) {
            const u = new Uint8Array(4);
            (function (x, b, h) {
              x.setUint32(b, h, !0);
            })(Y(u), 0, s);
            const w = i + o;
            return (await S(i)) || (await S(Math.min(w, p)));
            async function S(x) {
              const b = p - x,
                h = await ot(L, b, x);
              for (let y = h.length - i; y >= 0; y--)
                if (h[y] == u[0] && h[y + 1] == u[1] && h[y + 2] == u[2] && h[y + 3] == u[3])
                  return { offset: b + y, buffer: h.slice(y, y + i).buffer };
            }
          })(t, 101010256, t.size, 22, 1048560);
          if (!r) throw new Error(Le);
          const a = Y(r);
          let l = Q(a, 12),
            d = Q(a, 16),
            _ = et(a, 8),
            m = 0;
          if (d == vt || l == vt || _ == 65535) {
            const L = Y(await ot(t, r.offset - 20, 20));
            if (Q(L, 0) != 117853008) throw new Error(Oe);
            d = At(L, 8);
            let s = await ot(t, d, 56),
              p = Y(s);
            const i = r.offset - 20 - 56;
            if (Q(p, 0) != fe && d != i) {
              const o = d;
              (d = i), (m = d - o), (s = await ot(t, d, 56)), (p = Y(s));
            }
            if (Q(p, 0) != fe) throw new Error(We);
            (_ = At(p, 32)), (l = At(p, 40)), (d -= l);
          }
          if (d < 0 || d >= t.size) throw new Error(Et);
          let g = 0,
            v = await ot(t, d, l),
            T = Y(v);
          if (l) {
            const L = r.offset - l;
            if (Q(T, g) != he && d != L) {
              const s = d;
              (d = L), (m = d - s), (v = await ot(t, d, l)), (T = Y(v));
            }
          }
          if (d < 0 || d >= t.size) throw new Error(Et);
          const N = [];
          for (let L = 0; L < _; L++) {
            const s = new En(t, e.config, e.options);
            if (Q(T, g) != he) throw new Error(Be);
            $e(s, T, g + 6);
            const p = Boolean(s.bitFlag.languageEncodingFlag),
              i = g + 46,
              o = i + s.filenameLength,
              u = o + s.extraFieldLength,
              w = et(T, g + 4),
              S = (0 & w) == 0;
            Object.assign(s, {
              versionMadeBy: w,
              msDosCompatible: S,
              compressedSize: 0,
              uncompressedSize: 0,
              commentLength: et(T, g + 32),
              directory: S && (16 & _t(T, g + 38)) == 16,
              offset: Q(T, g + 42) + m,
              internalFileAttribute: Q(T, g + 34),
              externalFileAttribute: Q(T, g + 38),
              rawFilename: v.subarray(i, o),
              filenameUTF8: p,
              commentUTF8: p,
              rawExtraField: v.subarray(o, u),
            });
            const x = u + s.commentLength;
            s.rawComment = v.subarray(u, x);
            const b = pt(e, n, 'filenameEncoding'),
              h = pt(e, n, 'commentEncoding'),
              [y, C] = await Promise.all([
                jt(s.rawFilename, s.filenameUTF8 ? qe : b || Ve),
                jt(s.rawComment, s.commentUTF8 ? qe : h || Ve),
              ]);
            (s.filename = y),
              (s.comment = C),
              !s.directory && s.filename.endsWith('/') && (s.directory = !0),
              await Ke(s, s, T, g + 6);
            const U = new Me(s);
            if (((U.getData = (A, E) => s.getData(A, U, E)), N.push(U), (g = x), n.onprogress))
              try {
                n.onprogress(L + 1, _, new Me(s));
              } catch {}
          }
          return N;
        }
        async close() {}
      }),
      (c.configure = Xt),
      (c.getMimeType = function () {
        return 'application/octet-stream';
      }),
      Object.defineProperty(c, '__esModule', { value: !0 });
  });
})($t, $t.exports);
var Ln = zn($t.exports);
function On() {
  return {
    traceUrl: '',
    startTime: Number.MAX_SAFE_INTEGER,
    endTime: 0,
    browserName: '',
    options: { deviceScaleFactor: 1, isMobile: !1, viewport: { width: 1280, height: 800 } },
    pages: [],
    resources: [],
    actions: [],
    events: [],
    objects: {},
    hasSource: !1,
  };
}
var Ye;
((R) => {
  function f(c) {
    for (const k of c.splice(0)) k.dispose();
  }
  R.disposeAll = f;
})(Ye || (Ye = {}));
class Wn {
  constructor() {
    K(this, 'event');
    K(this, '_deliveryQueue');
    K(this, '_listeners', new Set());
    this.event = (f, c) => {
      this._listeners.add(f);
      let k = !1;
      const I = this,
        M = {
          dispose() {
            k || ((k = !0), I._listeners.delete(f));
          },
        };
      return c && c.push(M), M;
    };
  }
  fire(f) {
    const c = !this._deliveryQueue;
    this._deliveryQueue || (this._deliveryQueue = []);
    for (const k of this._listeners) this._deliveryQueue.push({ listener: k, event: f });
    if (!!c) {
      for (let k = 0; k < this._deliveryQueue.length; k++) {
        const { listener: I, event: M } = this._deliveryQueue[k];
        I.call(null, M);
      }
      this._deliveryQueue = void 0;
    }
  }
  dispose() {
    this._listeners.clear(), this._deliveryQueue && (this._deliveryQueue = []);
  }
}
class Bn {
  constructor(f, c, k) {
    K(this, '_snapshots');
    K(this, '_index');
    K(this, 'snapshotName');
    K(this, '_resources');
    K(this, '_snapshot');
    (this._resources = f),
      (this._snapshots = c),
      (this._index = k),
      (this._snapshot = c[k]),
      (this.snapshotName = c[k].snapshotName);
  }
  snapshot() {
    return this._snapshots[this._index];
  }
  viewport() {
    return this._snapshots[this._index].viewport;
  }
  render() {
    const f = (M, W, D) => {
        if (typeof M == 'string') {
          const H = Hn(M);
          return D === 'STYLE' || D === 'style' ? Gn(H) : H;
        }
        if (!M._string)
          if (Array.isArray(M[0])) {
            const H = W - M[0][0];
            if (H >= 0 && H <= W) {
              const B = jn(this._snapshots[H]),
                j = M[0][1];
              j >= 0 && j < B.length && (M._string = f(B[j], H, D));
            }
          } else if (typeof M[0] == 'string') {
            const H = [];
            H.push('<', M[0]);
            const B = M[0] === 'IFRAME' || M[0] === 'FRAME';
            for (const [j, Z] of Object.entries(M[1] || {})) {
              const dt = B && j.toLowerCase() === 'src' ? '__playwright_src__' : j,
                rt = j.toLowerCase() === 'href' || j.toLowerCase() === 'src' ? Kt(Z) : Z;
              H.push(' ', dt, '="', Pn(rt), '"');
            }
            H.push('>');
            for (let j = 2; j < M.length; j++) H.push(f(M[j], W, M[0]));
            Nn.has(M[0]) || H.push('</', M[0], '>'), (M._string = H.join(''));
          } else M._string = '';
        return M._string;
      },
      c = this._snapshot;
    let k = f(c.html, this._index, void 0);
    return k
      ? ((k =
          (c.doctype ? `<!DOCTYPE ${c.doctype}>` : '') +
          [
            '<style>*,*::before,*::after { visibility: hidden }</style>',
            `<style>*[__playwright_target__="${this.snapshotName}"] { background-color: #6fa8dc7f; }</style>`,
            `<script>${qn()}<\/script>`,
          ].join('') +
          k),
        { html: k, pageId: c.pageId, frameId: c.frameId, index: this._index })
      : { html: '', pageId: c.pageId, frameId: c.frameId, index: this._index };
  }
  resourceByUrl(f) {
    const c = this._snapshot;
    let k;
    for (const I of this._resources) {
      if (I._monotonicTime >= c.timestamp) break;
      if (I._frameref === c.frameId && I.request.url === f) {
        k = I;
        break;
      }
    }
    if (!k)
      for (const I of this._resources) {
        if (I._monotonicTime >= c.timestamp) break;
        if (I.request.url === f) return I;
      }
    if (k) {
      for (const I of c.resourceOverrides)
        if (f === I.url && I.sha1) {
          k = Ut(Rt({}, k), {
            response: Ut(Rt({}, k.response), { content: Ut(Rt({}, k.response.content), { _sha1: I.sha1 }) }),
          });
          break;
        }
    }
    return k;
  }
}
const Nn = new Set([
    'AREA',
    'BASE',
    'BR',
    'COL',
    'COMMAND',
    'EMBED',
    'HR',
    'IMG',
    'INPUT',
    'KEYGEN',
    'LINK',
    'MENUITEM',
    'META',
    'PARAM',
    'SOURCE',
    'TRACK',
    'WBR',
  ]),
  Je = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
function Pn(R) {
  return R.replace(/[&<>"']/gu, (f) => Je[f]);
}
function Hn(R) {
  return R.replace(/[&<]/gu, (f) => Je[f]);
}
function jn(R) {
  if (!R._nodes) {
    const f = [],
      c = (k) => {
        if (typeof k == 'string') f.push(k);
        else if (typeof k[0] == 'string') {
          for (let I = 2; I < k.length; I++) c(k[I]);
          f.push(k);
        }
      };
    c(R.html), (R._nodes = f);
  }
  return R._nodes;
}
function qn() {
  function R() {
    const f = [],
      c = [],
      k = (W) => {
        for (const D of W.querySelectorAll('[__playwright_scroll_top_]')) f.push(D);
        for (const D of W.querySelectorAll('[__playwright_scroll_left_]')) c.push(D);
        for (const D of W.querySelectorAll('[__playwright_value_]'))
          (D.value = D.getAttribute('__playwright_value_')), D.removeAttribute('__playwright_value_');
        for (const D of W.querySelectorAll('[__playwright_checked_]'))
          (D.checked = D.getAttribute('__playwright_checked_') === 'true'), D.removeAttribute('__playwright_checked_');
        for (const D of W.querySelectorAll('[__playwright_selected_]'))
          (D.selected = D.getAttribute('__playwright_selected_') === 'true'),
            D.removeAttribute('__playwright_selected_');
        for (const D of W.querySelectorAll('iframe, frame')) {
          const H = D.getAttribute('__playwright_src__');
          if (!H) D.setAttribute('src', 'data:text/html,<body style="background: #ddd"></body>');
          else {
            const B = new URL(window.location.href);
            B.searchParams.delete('pointX'), B.searchParams.delete('pointY');
            const j = B.pathname.lastIndexOf('/snapshot/');
            j !== -1 && (B.pathname = B.pathname.substring(0, j + 1)),
              (B.pathname += H.substring(1)),
              D.setAttribute('src', B.toString());
          }
        }
        for (const D of W.querySelectorAll('template[__playwright_shadow_root_]')) {
          const H = D,
            B = H.parentElement.attachShadow({ mode: 'open' });
          B.appendChild(H.content), H.remove(), k(B);
        }
        if ('adoptedStyleSheets' in W) {
          const D = [...W.adoptedStyleSheets];
          for (const H of W.querySelectorAll('template[__playwright_style_sheet_]')) {
            const B = H,
              j = new CSSStyleSheet();
            j.replaceSync(B.getAttribute('__playwright_style_sheet_')), D.push(j);
          }
          W.adoptedStyleSheets = D;
        }
      },
      I = () => {
        window.removeEventListener('load', I);
        for (const B of f)
          (B.scrollTop = +B.getAttribute('__playwright_scroll_top_')), B.removeAttribute('__playwright_scroll_top_');
        for (const B of c)
          (B.scrollLeft = +B.getAttribute('__playwright_scroll_left_')), B.removeAttribute('__playwright_scroll_left_');
        const W = new URL(window.location.href).searchParams,
          D = W.get('pointX'),
          H = W.get('pointY');
        if (D) {
          const B = document.createElement('x-pw-pointer');
          (B.style.position = 'fixed'),
            (B.style.backgroundColor = 'red'),
            (B.style.width = '20px'),
            (B.style.height = '20px'),
            (B.style.borderRadius = '10px'),
            (B.style.margin = '-10px 0 0 -10px'),
            (B.style.zIndex = '2147483647'),
            (B.style.left = D + 'px'),
            (B.style.top = H + 'px'),
            document.documentElement.appendChild(B);
        }
        document.styleSheets[0].disabled = !0;
      },
      M = () => k(document);
    window.addEventListener('load', I), window.addEventListener('DOMContentLoaded', M);
  }
  return `
(${R.toString()})()`;
}
const tn = ['about:', 'blob:', 'data:', 'file:', 'ftp:', 'http:', 'https:', 'mailto:', 'sftp:', 'ws:', 'wss:'],
  Xe = 'http://playwright.bloburl/#';
function Kt(R) {
  R.startsWith(Xe) && (R = R.substring(Xe.length));
  try {
    const f = new URL(R);
    if (f.protocol === 'javascript:') return 'javascript:void(0)';
    if (!(f.protocol === 'blob:') && tn.includes(f.protocol)) return R;
    const k = 'pw-' + f.protocol.slice(0, f.protocol.length - 1);
    return (f.protocol = 'https:'), (f.hostname = f.hostname ? `${k}--${f.hostname}` : k), f.toString();
  } catch {
    return R;
  }
}
const Vn = /url\(['"]?([\w-]+:)\/\//gi;
function Gn(R) {
  return R.replace(Vn, (f, c) =>
    !(c === 'blob:') && tn.includes(c) ? f : f.replace(c + '//', `https://pw-${c.slice(0, -1)}--`),
  );
}
class $n {
  constructor() {
    K(this, '_resources', []);
    K(this, '_frameSnapshots', new Map());
    K(this, '_didSnapshot', new Wn());
    K(this, 'onSnapshotEvent', this._didSnapshot.event);
  }
  clear() {
    (this._resources = []), this._frameSnapshots.clear();
  }
  addResource(f) {
    (f.request.url = Kt(f.request.url)), this._resources.push(f);
  }
  addFrameSnapshot(f) {
    for (const I of f.resourceOverrides) I.url = Kt(I.url);
    let c = this._frameSnapshots.get(f.frameId);
    c ||
      ((c = { raw: [], renderer: [] }),
      this._frameSnapshots.set(f.frameId, c),
      f.isMainFrame && this._frameSnapshots.set(f.pageId, c)),
      c.raw.push(f);
    const k = new Bn(this._resources, c.raw, c.raw.length - 1);
    c.renderer.push(k), this._didSnapshot.fire(k);
  }
  resources() {
    return this._resources.slice();
  }
  snapshotByName(f, c) {
    const k = this._frameSnapshots.get(f);
    return k == null ? void 0 : k.renderer.find((I) => I.snapshotName === c);
  }
  snapshotByIndex(f, c) {
    const k = this._frameSnapshots.get(f);
    return k == null ? void 0 : k.renderer[c];
  }
}
const gt = Ln;
class Kn {
  constructor() {
    K(this, 'contextEntry');
    K(this, 'pageEntries', new Map());
    K(this, '_snapshotStorage');
    K(this, '_entries', new Map());
    K(this, '_version');
    this.contextEntry = On();
  }
  _formatUrl(f) {
    let c = f.startsWith('http') || f.startsWith('blob') ? f : `file?path=${f}`;
    return c.startsWith('https://www.dropbox.com/') && (c = 'https://dl.dropboxusercontent.com/' + c.substring(24)), c;
  }
  async load(f, c) {
    this.contextEntry.traceUrl = f;
    const k = new gt.ZipReader(new gt.HttpReader(this._formatUrl(f), { mode: 'cors', preventHeadRequest: !0 }), {
      useWebWorkers: !1,
    });
    let I, M;
    for (const D of await k.getEntries({ onprogress: c }))
      D.filename.endsWith('.trace') && (I = D),
        D.filename.endsWith('.network') && (M = D),
        D.filename.includes('src@') && (this.contextEntry.hasSource = !0),
        this._entries.set(D.filename, D);
    this._snapshotStorage = new Qn(this._entries);
    const W = new gt.TextWriter();
    await I.getData(W);
    for (const D of (await W.getData()).split(`
`))
      this.appendEvent(D);
    if (M) {
      const D = new gt.TextWriter();
      await M.getData(D);
      for (const H of (await D.getData()).split(`
`))
        this.appendEvent(H);
    }
    this._build();
  }
  async resourceForSha1(f) {
    const c = this._entries.get('resources/' + f);
    if (!c) return;
    const k = new gt.BlobWriter();
    return await c.getData(k), await k.getData();
  }
  storage() {
    return this._snapshotStorage;
  }
  _build() {
    this.contextEntry.actions.sort((f, c) => f.metadata.startTime - c.metadata.startTime),
      (this.contextEntry.resources = this._snapshotStorage.resources());
  }
  _pageEntry(f) {
    let c = this.pageEntries.get(f);
    return c || ((c = { screencastFrames: [] }), this.pageEntries.set(f, c), this.contextEntry.pages.push(c)), c;
  }
  appendEvent(f) {
    if (!f) return;
    const c = this._modernize(JSON.parse(f));
    switch (c.type) {
      case 'context-options': {
        (this.contextEntry.browserName = c.browserName),
          (this.contextEntry.title = c.title),
          (this.contextEntry.platform = c.platform),
          (this.contextEntry.wallTime = c.wallTime),
          (this.contextEntry.options = c.options);
        break;
      }
      case 'screencast-frame': {
        this._pageEntry(c.pageId).screencastFrames.push(c);
        break;
      }
      case 'action': {
        !Zn(c.metadata) &&
          (!c.metadata.internal || c.metadata.apiName) &&
          (c.metadata.apiName || (c.metadata.apiName = c.metadata.type + '.' + c.metadata.method),
          this.contextEntry.actions.push(c));
        break;
      }
      case 'event': {
        const k = c.metadata;
        k.pageId &&
          (k.method === '__create__'
            ? (this.contextEntry.objects[k.params.guid] = k.params.initializer)
            : this.contextEntry.events.push(c));
        break;
      }
      case 'resource-snapshot':
        this._snapshotStorage.addResource(c.snapshot);
        break;
      case 'frame-snapshot':
        this._snapshotStorage.addFrameSnapshot(c.snapshot);
        break;
    }
    (c.type === 'action' || c.type === 'event') &&
      ((this.contextEntry.startTime = Math.min(this.contextEntry.startTime, c.metadata.startTime)),
      (this.contextEntry.endTime = Math.max(this.contextEntry.endTime, c.metadata.endTime))),
      c.type === 'screencast-frame' &&
        ((this.contextEntry.startTime = Math.min(this.contextEntry.startTime, c.timestamp)),
        (this.contextEntry.endTime = Math.max(this.contextEntry.endTime, c.timestamp)));
  }
  _modernize(f) {
    if (this._version === void 0) return f;
    for (let c = this._version; c < 3; ++c) f = this[`_modernize_${c}_to_${c + 1}`].call(this, f);
    return f;
  }
  _modernize_0_to_1(f) {
    return (
      f.type === 'action' &&
        typeof f.metadata.error == 'string' &&
        (f.metadata.error = { error: { name: 'Error', message: f.metadata.error } }),
      f
    );
  }
  _modernize_1_to_2(f) {
    return (
      f.type === 'frame-snapshot' &&
        f.snapshot.isMainFrame &&
        (f.snapshot.viewport = this.contextEntry.options.viewport || { width: 1280, height: 720 }),
      f
    );
  }
  _modernize_2_to_3(f) {
    if (f.type === 'resource-snapshot' && !f.snapshot.request) {
      const c = f.snapshot;
      f.snapshot = {
        _frameref: c.frameId,
        request: {
          url: c.url,
          method: c.method,
          headers: c.requestHeaders,
          postData: c.requestSha1 ? { _sha1: c.requestSha1 } : void 0,
        },
        response: {
          status: c.status,
          headers: c.responseHeaders,
          content: { mimeType: c.contentType, _sha1: c.responseSha1 },
        },
        _monotonicTime: c.timestamp,
      };
    }
    return f;
  }
}
class Qn extends $n {
  constructor(f) {
    super();
    K(this, '_entries');
    this._entries = f;
  }
  async resourceContent(f) {
    const c = this._entries.get('resources/' + f),
      k = new gt.BlobWriter();
    return await c.getData(k), k.getData();
  }
}
function Zn(R) {
  return R.method.startsWith('tracing');
}
self.addEventListener('install', function (R) {
  self.skipWaiting();
});
self.addEventListener('activate', function (R) {
  R.waitUntil(self.clients.claim());
});
const Yn = new URL(self.registration.scope).pathname,
  ht = new Map(),
  Qt = new Map();
async function Xn(R, f, c) {
  const k = ht.get(R);
  if ((Qt.set(f, R), k)) return k.traceModel;
  const I = new Kn();
  await I.load(R, c);
  const M = new In(I.storage());
  return ht.set(R, { traceModel: I, snapshotServer: M }), I;
}
async function Jn(R) {
  const f = R.request,
    c = await self.clients.get(R.clientId);
  if (f.url.startsWith(self.registration.scope)) {
    const W = new URL(f.url),
      D = W.pathname.substring(Yn.length - 1);
    if (D === '/ping') return await tr(), new Response(null, { status: 200 });
    const H = W.searchParams.get('trace'),
      { snapshotServer: B } = ht.get(H) || {};
    if (D === '/context')
      try {
        const j = await Xn(H, R.clientId, (Z, dt) => {
          c.postMessage({ method: 'progress', params: { done: Z, total: dt } });
        });
        return new Response(JSON.stringify(j.contextEntry), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (j) {
        console.error(j);
        const Z = W.searchParams.get('traceFileName');
        return new Response(
          JSON.stringify({
            error: Z
              ? `Could not load trace from ${Z}. Make sure to upload a valid Playwright trace.`
              : `Could not load trace from ${H}. Make sure a valid Playwright Trace is accessible over this url.`,
          }),
          { status: 500, headers: { 'Content-Type': 'application/json' } },
        );
      }
    if (D.startsWith('/snapshotInfo/'))
      return B ? B.serveSnapshotInfo(D, W.searchParams) : new Response(null, { status: 404 });
    if (D.startsWith('/snapshot/'))
      return B ? B.serveSnapshot(D, W.searchParams, f.url) : new Response(null, { status: 404 });
    if (D.startsWith('/sha1/')) {
      for (const { traceModel: j } of ht.values()) {
        const Z = await j.resourceForSha1(D.slice(6));
        if (Z) return new Response(Z, { status: 200 });
      }
      return new Response(null, { status: 404 });
    }
    return fetch(R.request);
  }
  const k = c.url,
    I = new URL(k).searchParams.get('trace'),
    { snapshotServer: M } = ht.get(I) || {};
  return M ? M.serveResource(f.url, k) : new Response(null, { status: 404 });
}
async function tr() {
  const R = await self.clients.matchAll(),
    f = new Set();
  for (const [c, k] of Qt) R.find((I) => I.id === c) ? f.add(k) : Qt.delete(c);
  for (const c of ht.keys()) f.has(c) || ht.delete(c);
}
self.addEventListener('fetch', function (R) {
  R.respondWith(Jn(R));
});
