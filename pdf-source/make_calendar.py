from common import *
from reportlab.pdfgen import canvas as cv
P=lambda t,s='cell':Paragraph(t,ST[s])
OUT='../public/downloads/procor-compliance-calendar-2026-27.pdf'
import os; os.makedirs(os.path.dirname(OUT),exist_ok=True)

M_RECUR=[
 ('7th','TDS/TCS deposit for the previous month','Income-tax Act, 2025','All deductors (March deduction: 30 April)'),
 ('11th','GSTR-1 (monthly filers)','GST','Registered taxpayers not on QRMP'),
 ('15th','EPF: ECR filing and contribution','EPF','Establishments covered by EPF'),
 ('15th','ESIC contribution','ESIC','Establishments covered by ESIC'),
 ('20th','GSTR-3B and GST payment (monthly filers)','GST','Registered taxpayers not on QRMP'),
 ('State','Professional tax and Labour Welfare Fund','State laws','Employers in states that levy them; frequency varies'),
]
QRMP=('22nd / 24th','GSTR-3B for the quarter (QRMP filers; date depends on state)','GST','QRMP taxpayers')
MONTHS=[
 ('October 2026',[QRMP,
   ('30 Oct','AOC-4: financial statements for FY 2025-26 (within 30 days of AGM; shown for an AGM on 30 Sep)','Companies Act','Companies'),
   ('30 Oct','Form 8: statement of account & solvency, FY 2025-26','LLP Act','LLPs'),
   ('31 Oct','Quarterly TDS/TCS returns, Jul–Sep 2026: Form 138 (salary), 140, 143, 144','Income-tax Act, 2025','All deductors/collectors'),
   ('31 Oct','Income tax return, FY 2025-26, audit cases','Income-tax Act, 1961','Businesses requiring tax audit'),
   ('31 Oct','Transfer pricing report, FY 2025-26','Income-tax Act, 1961','Entities with international/specified transactions'),
   ('31 Oct','MSME-1: half-yearly return of dues to MSMEs (Apr–Sep)','Companies Act','Companies with MSME dues over 45 days')]),
 ('November 2026',[
   ('15 Nov','Form 131 (formerly 16A): non-salary TDS certificates, Jul–Sep','Income-tax Act, 2025','Deductors'),
   ('29 Nov','MGT-7 / MGT-7A: annual return (within 60 days of AGM; shown for an AGM on 30 Sep)','Companies Act','Companies'),
   ('30 Nov','Income tax return, FY 2025-26, transfer pricing cases','Income-tax Act, 1961','Entities with a TP report'),
   ('30 Nov','Statutory bonus for FY 2025-26 to be paid (within 8 months of year-end)','Code on Wages, 2019','Employers covered by bonus provisions')]),
 ('December 2026',[
   ('15 Dec','Advance tax: third instalment (75% cumulative)','Income-tax Act, 2025','Taxpayers liable to advance tax'),
   ('31 Dec','GSTR-9 / GSTR-9C: annual return and reconciliation, FY 2025-26','GST','Registered taxpayers above thresholds')]),
 ('January 2027',[QRMP,
   ('31 Jan','Quarterly TDS/TCS returns, Oct–Dec 2026: Form 138, 140, 143, 144','Income-tax Act, 2025','All deductors/collectors')]),
 ('February 2027',[
   ('15 Feb','Form 131: non-salary TDS certificates, Oct–Dec','Income-tax Act, 2025','Deductors'),
   ('Plan','Start collecting employee investment proofs (Form 124, formerly 12BB) for final TDS','Payroll year-end','Employers')]),
 ('March 2027',[
   ('15 Mar','Advance tax: final instalment (100%)','Income-tax Act, 2025','Taxpayers liable to advance tax'),
   ('31 Mar','Revised return for FY 2025-26 (last date)','Income-tax Act, 1961','Taxpayers correcting a filed return'),
   ('31 Mar','Tax year 2026-27 ends: finalise salary TDS on verified proofs','Payroll year-end','Employers')]),
 ('April 2027',[QRMP,
   ('30 Apr','TDS/TCS deposit for March 2027 (in place of the 7th)','Income-tax Act, 2025','All deductors'),
   ('30 Apr','MSME-1: half-yearly return (Oct–Mar)','Companies Act','Companies with MSME dues over 45 days')]),
 ('May 2027',[
   ('30 May','Form 11: annual return, FY 2026-27','LLP Act','LLPs'),
   ('31 May','Quarterly TDS/TCS returns, Jan–Mar 2027: Form 138, 140, 143, 144','Income-tax Act, 2025','All deductors/collectors')]),
 ('June 2027',[
   ('15 Jun','Form 130 (formerly Form 16): salary TDS certificates for tax year 2026-27, the first year on the new form','Income-tax Act, 2025','Employers'),
   ('15 Jun','Form 131: non-salary TDS certificates, Jan–Mar','Income-tax Act, 2025','Deductors'),
   ('15 Jun','Advance tax: first instalment, tax year 2027-28 (15%)','Income-tax Act, 2025','Taxpayers liable to advance tax'),
   ('30 Jun','DPT-3: return of deposits / outstanding receipts, FY 2026-27','Companies Act','Companies (other than government companies)')]),
 ('July 2027',[QRMP,
   ('15 Jul','FLA return: foreign liabilities and assets','FEMA / RBI','Entities with FDI or overseas investment'),
   ('31 Jul','Quarterly TDS/TCS returns, Apr–Jun 2027: Form 138, 140, 143, 144','Income-tax Act, 2025','All deductors/collectors'),
   ('31 Jul','Income tax return, tax year 2026-27: non-audit, no business income','Income-tax Act, 2025','Individuals (e.g. salaried)')]),
 ('August 2027',[
   ('15 Aug','Form 131: non-salary TDS certificates, Apr–Jun','Income-tax Act, 2025','Deductors'),
   ('31 Aug','Income tax return, tax year 2026-27: non-audit business/professional income','Income-tax Act, 2025','Non-audit business & professional taxpayers')]),
 ('September 2027',[
   ('15 Sep','Advance tax: second instalment (45% cumulative)','Income-tax Act, 2025','Taxpayers liable to advance tax'),
   ('30 Sep','AGM for FY 2026-27 (last date)','Companies Act','Companies'),
   ('30 Sep','Tax audit report, tax year 2026-27: Form 26 (formerly 3CA/3CB-3CD)','Income-tax Act, 2025','Businesses requiring tax audit'),
   ('30 Sep','DIR-3 KYC for directors, where due','Companies Act','Directors holding a DIN')]),
]
W2=W-2*M; cw=[22*mm,W2-22*mm-34*mm-40*mm,34*mm,40*mm]
story=[]
story+= [P('How to use this calendar','kick'),P('Your 12-month statutory calendar','h1'),
 P('Each month lists the recurring deadlines that apply every month, followed by the dates specific to that month. Dates are the statutory due dates as of 23 September 2026. Government extensions are announced from time to time, and some obligations depend on your entity type, turnover, headcount or state. Use this as a planning tool and confirm what applies to your business.','p'),
 P('What changed on 1 April 2026','h2'),
 P('The Income-tax Act, 2025 and the Income-tax Rules, 2026 replaced the 1961 Act for income from 1 April 2026. Due dates for TDS returns are unchanged, but most form numbers are new. Returns for periods up to 31 March 2026 stay on the old forms, even when filed later.','p'),
 table([hdr(['What it is','Old form','New form'])]+[[P(a),P(b),P(c,'cellb')] for a,b,c in [
   ('Quarterly TDS return, salary','Form 24Q','Form 138'),('Quarterly TDS return, resident non-salary','Form 26Q','Form 140'),
   ('Quarterly TCS return','Form 27EQ','Form 143'),('Quarterly TDS return, non-residents','Form 27Q','Form 144'),
   ('Salary TDS certificate','Form 16','Form 130'),('Non-salary TDS certificate','Form 16A','Form 131'),
   ('Employee declaration of deductions','Form 12BB','Form 124'),('Tax audit report','Form 3CA/3CB + 3CD','Form 26')]],[W2*0.5,W2*0.25,W2*0.25]),
 Spacer(1,10),P('Every month','h2'),
 table([hdr(['Due','Compliance','Law','Applies to'])]+[[P(a,'cellb'),P(b),P(c),P(d)] for a,b,c,d in M_RECUR],cw),
 Spacer(1,8),P('If you are on the QRMP scheme for GST, GSTR-3B is quarterly, due on the 22nd or 24th of the month after the quarter depending on your state; monthly tax is paid through PMT-06 by the 25th.','small'),
 PageBreak()]
for name,items in MONTHS:
    story+= [P('Statutory calendar','kick'),P(name,'h1'),P('Every month: TDS deposit 7th · GSTR-1 11th · EPF & ESIC 15th · GSTR-3B 20th · PT & LWF as per state','small'),Spacer(1,10),
      P('Specific to this month','h2'),
      table([hdr(['Due','Compliance','Law','Applies to'])]+[[P(a,'cellb'),P(b),P(c),P(d)] for a,b,c,d in items],cw),
      Spacer(1,16),
      Table([[P('<b>Notes</b>','cell')],[''],[''],['']],colWidths=[W2],rowHeights=[16,22,22,22],style=[('LINEBELOW',(0,1),(-1,-1),.5,LINE)]),
      Spacer(1,12),
      P('Want these handled for you? Procor runs payroll, statutory and corporate compliance on a fixed monthly calendar. Book a free consultation at procor.co.in/contact or call +91 99999 54416.','small'),
      PageBreak()]
story.pop()
story+=[Spacer(1,10),P('Disclaimer: This calendar is general information prepared by Procor Compliance Solutions LLP from the law and official guidance as of 23 September 2026. It is not legal or tax advice. Due dates can be extended or changed by government notification, and applicability depends on your facts. Confirm before acting.','small')]
d=doc(OUT,'Statutory Compliance Calendar, Oct 2026 – Sep 2027','Statutory compliance calendar · Oct 2026 – Sep 2027')
import io
buf=io.BytesIO()
d.build(story)
# prepend cover
from pypdf import PdfReader,PdfWriter
cbuf=io.BytesIO(); c=cv.Canvas(cbuf,pagesize=A4)
cover(c,['Statutory Compliance','Calendar'],['Month-by-month due dates for Indian businesses','October 2026 – September 2027'],['Updated for the Income-tax Act, 2025 (new TDS form numbers)','Prepared by Procor Compliance Solutions LLP · procor.co.in'])
c.save()
w=PdfWriter(); [w.add_page(p) for p in PdfReader(cbuf).pages]; [w.add_page(p) for p in PdfReader(OUT).pages]
w.add_metadata({'/Title':'Statutory Compliance Calendar, Oct 2026 – Sep 2027','/Author':'Procor Compliance Solutions LLP'})
with open(OUT,'wb') as f: w.write(f)
print('pages',len(PdfReader(OUT).pages))
