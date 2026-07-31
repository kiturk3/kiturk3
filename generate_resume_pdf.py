import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def generate_pdf():
    assets_dir = os.path.join(os.getcwd(), 'assets')
    os.makedirs(assets_dir, exist_ok=True)
    pdf_path = os.path.join(assets_dir, 'Krutik_Khokhara_Resume.pdf')

    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=40,
        bottomMargin=40
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        alignment=1, # Center
        textColor=colors.HexColor('#1A202C')
    )

    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        alignment=1,
        textColor=colors.HexColor('#2B6CB0')
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=1,
        textColor=colors.HexColor('#4A5568')
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=colors.HexColor('#2B6CB0'),
        spaceBefore=10,
        spaceAfter=4
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#2D3748'),
        spaceAfter=4
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.8,
        leading=12.5,
        textColor=colors.HexColor('#2D3748'),
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=3
    )

    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=colors.HexColor('#1A202C')
    )

    date_style = ParagraphStyle(
        'DateStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=13,
        alignment=2,
        textColor=colors.HexColor('#718096')
    )

    elements = []

    # Header
    elements.append(Paragraph("KRUTIK KHOKHARA", title_style))
    elements.append(Spacer(1, 3))
    elements.append(Paragraph("Senior Android Engineer &middot; Cross-Platform & AI-Augmented Development", subtitle_style))
    elements.append(Spacer(1, 4))
    elements.append(Paragraph("+91 (971) 237-8393 &nbsp;|&nbsp; kbkhokhara@gmail.com &nbsp;|&nbsp; Ahmedabad, India &nbsp;|&nbsp; LinkedIn: linkedin.com/in/krutik-khokhara", contact_style))
    elements.append(Spacer(1, 8))
    elements.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#CBD5E0'), spaceAfter=8))

    # Professional Summary
    elements.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    elements.append(Paragraph("Senior Android engineer with 12+ years of end-to-end mobile and cross-platform application development experience. Proven track record of shipping production-grade Android applications for US-based clients across hospitality, logistics, health, and e-commerce sectors, with onsite US client collaboration. Expertise spans native Android (Java/Kotlin/Jetpack Compose), MVVM architecture, Jetpack libraries, hardware integrations, and Agile delivery. Additionally experienced in cross-platform development with Svelte and Tauri, with AI-augmented engineering workflows using Claude, Cursor, and Codex integrated into daily development cycles.", body_style))
    elements.append(Spacer(1, 6))

    # Experience
    elements.append(Paragraph("EXPERIENCE", section_heading))

    # Job 1
    t1 = Table([[
        Paragraph("<b>Senior Software Engineer</b> | Grubbrr Systems Ind. PVT LTD.", job_title_style),
        Paragraph("June 2017 &ndash; Present", date_style)
    ]], colWidths=[380, 150])
    t1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    elements.append(t1)
    elements.append(Paragraph("<i>US Onsite Client Experience &middot; Hospitality & Quick-Service Industry &middot; Agile / Scrum</i>", body_style))
    elements.append(Spacer(1, 2))

    bullets_j1 = [
        "Architected and shipped <b>KIOSK V3</b> &mdash; a self-service food & beverage ordering system built natively for Android and extended cross-platform with Svelte/Tauri, live across multiple US restaurant locations on low-spec hardware.",
        "Maintained and extended <b>POS V2</b> &mdash; a native Android Point-of-Sale system handling order processing, payment flows, and real-time kitchen display sync for hospitality clients.",
        "Led architecture decisions for both products, adopting MVVM pattern and Jetpack Compose for new UI modules, reducing view-layer complexity and improving testability.",
        "Built hardware integrations for Epson receipt printers, USB/serial peripheral devices, and barcode scanners within native Android and Tauri environments.",
        "Conducted code reviews across all active projects, enforcing SOLID principles and Kotlin best practices; introduced CI/CD pipelines using Git hooks.",
        "Led sprint planning and estimation cycles, coordinating cross-functional delivery across engineering, QA, and US-based client stakeholders.",
        "Integrated AI-assisted development workflows (Claude, Cursor, Codex) to accelerate feature iteration and reduce debugging cycle time.",
        "Onsite collaboration with US-based clients on requirements, delivery timelines, and post-launch support."
    ]
    for b in bullets_j1:
        elements.append(Paragraph(f"&bull; {b}", bullet_style))

    elements.append(Spacer(1, 6))

    # Job 2
    t2 = Table([[
        Paragraph("<b>Founder & Software Engineer</b> | TriSoftDevelopers", job_title_style),
        Paragraph("Jan 2016 &ndash; June 2017", date_style)
    ]], colWidths=[380, 150])
    t2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    elements.append(t2)
    bullets_j2 = [
        "Founded a boutique Android consultancy; independently architected and delivered 10+ production apps for clients across India, Portugal, and the UAE.",
        "Built <b>RMTS</b> &mdash; a real-time GPS bus tracking app for Rajkot Municipal Transport with live next-bus monitoring.",
        "Developed <b>AfsarBitiya</b> (exam prep platform for GPSC, NEET, IIT) and <b>EasyTax</b> (income tax calculator); managed full client lifecycle."
    ]
    for b in bullets_j2:
        elements.append(Paragraph(f"&bull; {b}", bullet_style))

    elements.append(Spacer(1, 6))

    # Job 3
    t3 = Table([[
        Paragraph("<b>Software Engineer</b> | eHeuristic Solutions", job_title_style),
        Paragraph("May 2014 &ndash; Jan 2016", date_style)
    ]], colWidths=[380, 150])
    t3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    elements.append(t3)
    bullets_j3 = [
        "Developed <b>EdgeAlert</b> (Samsung Edge custom notification system), <b>BeamItUp</b> (XMPP location-based chat), and <b>Cric'O</b> (2D cricket card game).",
        "Shipped <b>DispatchMe</b> (courier app with QR scanning for Portugal), <b>PetsApp</b> (vet tracker with online + SQLite offline modes), and <b>MedicalPearls</b> (pharma reference app)."
    ]
    for b in bullets_j3:
        elements.append(Paragraph(f"&bull; {b}", bullet_style))

    elements.append(Spacer(1, 6))

    # Technical Skills
    elements.append(Paragraph("TECHNICAL SKILLS", section_heading))
    skills = [
        ("Core Android", "Java, Kotlin, Jetpack Compose, XML Layouts, MVVM, Android SDK, Gradle"),
        ("Jetpack & Libraries", "Room, Retrofit / OkHttp, Hilt / Dagger, Coroutines / Flow, WorkManager, Navigation, Paging"),
        ("Firebase & Quality", "Firebase, Crashlytics, JUnit, Espresso, CI/CD, Git, Agile / Scrum"),
        ("Hardware & Integrations", "Epson Printers, USB / Serial, Barcode / QR Scanning, MapBox API, XMPP, OpenGL, Bluetooth"),
        ("Cross-Platform & Web", "Svelte, Tauri, TypeScript, Python, HTML/CSS, JSP/Servlet, SQLite"),
        ("AI Tooling", "Claude, Codex, Cursor IDE, Agentic AI, Prompt Engineering, RAG, LLM Pipelines")
    ]
    for cat, items in skills:
        elements.append(Paragraph(f"<b>{cat}:</b> {items}", body_style))

    elements.append(Spacer(1, 6))

    # Education
    elements.append(Paragraph("EDUCATION", section_heading))
    t_edu = Table([[
        Paragraph("<b>Bachelor of Engineering &ndash; Information Technology</b><br/>C.U. Shah College of Engineering & Technology, Surendranagar", body_style),
        Paragraph("2009 &ndash; 2013", date_style)
    ]], colWidths=[380, 150])
    t_edu.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    elements.append(t_edu)

    doc.build(elements)
    print("PDF generated successfully at:", pdf_path)

if __name__ == "__main__":
    generate_pdf()
