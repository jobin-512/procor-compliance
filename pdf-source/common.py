from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
from reportlab.lib.styles import ParagraphStyle
F='/usr/share/fonts/truetype/dejavu/'
pdfmetrics.registerFont(TTFont('Sans',F+'DejaVuSans.ttf')); pdfmetrics.registerFont(TTFont('Sans-B',F+'DejaVuSans-Bold.ttf'))
from reportlab.pdfbase.pdfmetrics import registerFontFamily
registerFontFamily('Sans',normal='Sans',bold='Sans-B',italic='Sans',boldItalic='Sans-B')
NAVY=colors.HexColor('#0B2C5F'); ORANGE=colors.HexColor('#F06A0F'); INK=colors.HexColor('#0E1B33'); MUTED=colors.HexColor('#52617A')
LINE=colors.HexColor('#DCE3EE'); PAPER=colors.HexColor('#F5F7FB'); ORINK=colors.HexColor('#B44A00')
LOGO='logo-print.jpg'  # 752px, flattened on white: public/assets/procor-logo.png sized for print
W,H=A4; M=18*mm
ST={
 'h1':ParagraphStyle('h1',fontName='Sans-B',fontSize=22,leading=27,textColor=INK,spaceAfter=6),
 'h2':ParagraphStyle('h2',fontName='Sans-B',fontSize=14,leading=18,textColor=NAVY,spaceBefore=10,spaceAfter=6),
 'p':ParagraphStyle('p',fontName='Sans',fontSize=9.5,leading=14,textColor=INK,spaceAfter=6),
 'small':ParagraphStyle('s',fontName='Sans',fontSize=8,leading=11,textColor=MUTED),
 'cell':ParagraphStyle('c',fontName='Sans',fontSize=8.6,leading=11.5,textColor=INK),
 'cellb':ParagraphStyle('cb',fontName='Sans-B',fontSize=8.6,leading=11.5,textColor=INK),
 'kick':ParagraphStyle('k',fontName='Sans-B',fontSize=9,leading=12,textColor=ORINK,spaceAfter=4),
}
def bracket(c,x,y,s=16,w=3.5):
    c.setStrokeColor(ORANGE); c.setLineWidth(w); c.line(x,y,x+s,y); c.line(x,y,x,y-s)
def page_chrome(footer_note):
    def draw(c,doc):
        c.saveState()
        c.drawImage(LOGO,M,H-M-11*mm,width=24*mm,height=11*mm,preserveAspectRatio=True,mask='auto')
        c.setFont('Sans',7.5); c.setFillColor(MUTED)
        c.drawRightString(W-M,H-M-6*mm,footer_note)
        c.setStrokeColor(LINE); c.setLineWidth(.6); c.line(M,14*mm,W-M,14*mm)
        c.drawString(M,9*mm,'Procor Compliance Solutions LLP  ·  +91 99999 54416  ·  info@procor.co.in  ·  procor.co.in')
        c.drawRightString(W-M,9*mm,f'Page {doc.page}')
        c.restoreState()
    return draw
def cover(c,title,sub,meta):
    c.setFillColor(NAVY); c.rect(0,0,W,H,stroke=0,fill=1)
    c.setFillColor(colors.white); c.roundRect(M,H-M-40*mm,80*mm,40*mm,4*mm,stroke=0,fill=1)
    c.drawImage(LOGO,M+4*mm,H-M-37*mm,width=72*mm,height=34*mm,preserveAspectRatio=True,mask='auto')
    c.setStrokeColor(ORANGE); c.setLineWidth(9); c.line(W-M-40*mm,H-M,W-M,H-M); c.line(W-M,H-M+3,W-M,H-M-40*mm)
    y=H*0.52
    c.setFillColor(colors.white); c.setFont('Sans-B',30)
    for line in title: c.drawString(M,y,line); y-=38
    c.setFont('Sans',13); c.setFillColor(colors.HexColor('#C9D6EC'))
    y-=6
    for line in sub: c.drawString(M,y,line); y-=19
    c.setFont('Sans',9); y=30*mm
    for line in meta: c.drawString(M,y,line); y-=13
    c.showPage()
def doc(path,title,note):
    d=BaseDocTemplate(path,pagesize=A4,leftMargin=M,rightMargin=M,topMargin=M+16*mm,bottomMargin=20*mm,title=title,author='Procor Compliance Solutions LLP')
    fr=Frame(M,20*mm,W-2*M,H-M-16*mm-20*mm,id='f',leftPadding=0,rightPadding=0,topPadding=0,bottomPadding=0)
    d.addPageTemplates([PageTemplate(id='p',frames=[fr],onPage=page_chrome(note))])
    return d
def table(rows,widths,header=True,zebra=True):
    t=Table(rows,colWidths=widths,repeatRows=1 if header else 0)
    s=[('VALIGN',(0,0),(-1,-1),'TOP'),('LINEBELOW',(0,0),(-1,-1),.5,LINE),('TOPPADDING',(0,0),(-1,-1),5),('BOTTOMPADDING',(0,0),(-1,-1),5),('LEFTPADDING',(0,0),(-1,-1),5),('RIGHTPADDING',(0,0),(-1,-1),5)]
    if header: s+= [('BACKGROUND',(0,0),(-1,0),NAVY)]
    if zebra:
        for i in range(1 if header else 0,len(rows)):
            if i%2==0: s.append(('BACKGROUND',(0,i),(-1,i),PAPER))
    t.setStyle(TableStyle(s)); return t
def hdr(cells): return [Paragraph(f'<font color="white"><b>{c}</b></font>',ST['cell']) for c in cells]
