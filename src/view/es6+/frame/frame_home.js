exports.print = (csrf_tk, ssr_html) => {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>aj-bank</title><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="calipso" content="${csrf_tk}"><link rel="manifest" href="/manifest.json"><link rel="shortcut icon" href="/assets/img/favicon.ico"><link rel="stylesheet" href="/assets/css/font_manjari.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/c/font-awesome.min.css"><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"><link rel="stylesheet" href="/assets/c/home_style.css"><!-- <link rel="stylesheet" href="/assets/c/loader_spinner.c"> --><script src="https://cdnjs.cloudflare.com/ajax/libs/validator/10.11.0/validator.min.js"></script><script src="/assets/js/config_fb.js"></script><script src="/assets/js/fallback.min.js"></script></head><body><div id="app">${ssr_html}</div><script defer="defer" src="/assets/js/v_home.js"></script></body></html>`
}