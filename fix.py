import json
with open('d:/Projects/SMG/src/Services.tsx', 'r', encoding='utf-8') as f:
    content = f.read()
if content.startswith('"') and content.endswith('"'):
    try:
        content = json.loads(content)
    except:
        content = eval(content)
with open('d:/Projects/SMG/src/Services.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
