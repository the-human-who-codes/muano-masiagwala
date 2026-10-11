Edit `resume.html`, then regenerate the PDF served by the site:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer \
  --print-to-pdf=public/resume.pdf resume/resume.html
```
