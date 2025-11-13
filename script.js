// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Counter animation
function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));

// Platform bar animation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelectorAll('.platform-fill').forEach(bar => {
            const value = bar.getAttribute('data-value');
            bar.style.width = value + '%';
        });
    }, 500);
});

// Modal content definitions
const modalContent = {
    'media-power': {
        title: 'Concentrated Media Power',
        body: '<div class="alert alert-primary"><h6><i class="fas fa-quote-left"></i> Supporting Evidence</h6></div>' +
              '<p><strong>The Challenge:</strong> Global media conglomerates control content production and distribution, creating power asymmetries (Mirrlees, 2024).</p>' +
              '<p><strong>In the Philippines:</strong> Netflix dominates with 34% market share, while Disney+, Amazon Prime, and HBO Go control most of the remaining streaming landscape (Unbox.ph, 2024).</p>' +
              '<p><strong>Impact:</strong> Local producers struggle to compete with the financial and technological capabilities of these multinational corporations (Statista, 2024).</p>' +
              '<p><strong>The Result:</strong> This concentration means that foreign corporations decide what stories get told, which perspectives receive amplification, and how Filipino culture is represented to global audiences.</p>'
    },
    'cultural-flow': {
        title: 'Asymmetric Cultural Flow',
        body: '<div class="alert alert-primary"><h6><i class="fas fa-quote-left"></i> Supporting Evidence</h6></div>' +
              '<p><strong>The Pattern:</strong> Media content flows predominantly from Western nations to developing countries, creating cultural trade deficits (EBSCO Research Starters, 2024).</p>' +
              '<p><strong>Philippine Context:</strong> The country imports significantly more media content than it exports, influenced by colonial history with Spain and America (Albuquerque, 2024).</p>' +
              '<p><strong>Result:</strong> Western entertainment content, English-language programming, and pop culture references reshape local youth culture and societal values (Parrot Analytics, 2024).</p>' +
              '<p><strong>The Imbalance:</strong> While some Filipino content reaches global audiences through these platforms, the flow remains overwhelmingly one-directional, reinforcing center-periphery dynamics in global media systems.</p>'
    },
    'digital-divide': {
        title: 'Digital Cultural Imperialism',
        body: '<div class="alert alert-primary"><h6><i class="fas fa-quote-left"></i> Supporting Evidence</h6></div>' +
              '<p><strong>Modern Form:</strong> Media imperialism extends beyond traditional broadcast to encompass digital platforms, algorithms, and data collection (ResearchGate, 2022).</p>' +
              '<p><strong>Scale:</strong> 86.75 million Filipinos use social media platforms, with 96% on Facebook and 49.09 million on TikTok (Spiralytics, 2024; DataReportal, 2024).</p>' +
              '<p><strong>Control:</strong> Foreign-owned algorithms determine information exposure, prioritizing engagement over accuracy (Rappler, 2024).</p>' +
              '<p><strong>The Vulnerability:</strong> These platforms have become essential infrastructure for Filipino social, economic, and political life—yet operate entirely outside Philippine jurisdiction and control.</p>'
    },
    'theoretical-framework': {
        title: 'Theoretical Foundations of Media Imperialism',
        body: '<h5>Five Key Frameworks Explaining Media Globalization</h5><div class="accordion" id="theoryAccordion"><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#theory1">Media Imperialism Theory</button></h2><div id="theory1" class="accordion-collapse collapse show" data-bs-parent="#theoryAccordion"><div class="accordion-body"><strong>Core Concept:</strong> Western (particularly American) media content dominance represents soft power projection shaping global cultural norms (Mirrlees, 2024).<br><strong>Application:</strong> Since the 1990s, US institutions have set standards for global scholarship and cultural production, penetrating deeply into international systems.</div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#theory2">Global Media Systems Theory</button></h2><div id="theory2" class="accordion-collapse collapse" data-bs-parent="#theoryAccordion"><div class="accordion-body"><strong>Core Concept:</strong> Media operates as a global system with center-periphery dynamics mirroring economic and political globalization (EBSCO Research Starters, 2024).<br><strong>Application:</strong> Powerful metropolitan nations at the center break down integrity and autonomy of peripheral countries like the Philippines.</div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#theory3">Digital Cultural Imperialism</button></h2><div id="theory3" class="accordion-collapse collapse" data-bs-parent="#theoryAccordion"><div class="accordion-body"><strong>Core Concept:</strong> Modern imperialism extends beyond traditional media to digital platforms, algorithms, and data systems (ResearchGate, 2022).<br><strong>Application:</strong> Globalization facilitates cultural spread through technology, but this becomes a tool of cultural imperialism when controlled by foreign powers.</div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#theory4">Empire and Media Symbiosis</button></h2><div id="theory4" class="accordion-collapse collapse" data-bs-parent="#theoryAccordion"><div class="accordion-body"><strong>Core Concept:</strong> All empires are media-dependent; media imperialism has been central to world systems for centuries (Wikipedia, 2025).<br><strong>Application:</strong> Media serves as instrument of economic, geopolitical, and cultural-ideological expansion and influence.</div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#theory5">Political Economy of Media</button></h2><div id="theory5" class="accordion-collapse collapse" data-bs-parent="#theoryAccordion"><div class="accordion-body"><strong>Core Concept:</strong> Transnational corporate ownership creates systemic biases favoring dominant cultural interests (ResearchGate, 2024).<br><strong>Application:</strong> Alternative views and local cultural expressions are pushed to margins while corporate content dominates.</div></div></div></div>'
    },
    'stakeholder-positions': {
        title: 'Stakeholder Perspectives & Proposed Solutions',
        body: '<h5>Different Actors, Different Solutions</h5><div class="table-responsive"><table class="table table-bordered"><thead><tr><th>Stakeholder</th><th>Position</th><th>Proposed Solution</th></tr></thead><tbody><tr><td><strong>Global Media Companies</strong></td><td>Market liberalization, reduced regulation</td><td>Remove content quotas, harmonize international copyright, market-based regulation (Evoca TV, 2024)</td></tr><tr><td><strong>Philippine Government</strong></td><td>Balance development with cultural protection</td><td>Local content mandates, foreign investment policies requiring partnerships, platform taxation (Parrot Analytics, 2024)</td></tr><tr><td><strong>Local Media Industry</strong></td><td>Protection from unfair competition</td><td>Development funds, anti-dumping policies, government support for Filipino content (Media Meter, 2025)</td></tr><tr><td><strong>Civil Society</strong></td><td>Media diversity and democratic access</td><td>Public broadcasting investment, media literacy programs, community media support (Albuquerque, 2024)</td></tr><tr><td><strong>Academic Community</strong></td><td>Evidence-based balanced approach</td><td>Research-informed policies, international collaboration on media regulation (Mirrlees, 2024)</td></tr><tr><td><strong>Filipino Viewers</strong></td><td>Access to both global and local content</td><td>Quality Filipino productions with global platform access (Unbox.ph, 2024)</td></tr></tbody></table></div><h5 class="mt-4">Evaluation Criteria</h5><p>The comprehensive cultural sovereignty framework was selected by evaluating all proposed solutions against:</p><ul><li><strong>Effectiveness:</strong> Does it address root causes of media imperialism?</li><li><strong>Feasibility:</strong> Can it be implemented with available resources and political will?</li><li><strong>Cultural Impact:</strong> Does it protect and promote Filipino cultural sovereignty?</li><li><strong>Democratic Legitimacy:</strong> Does it involve stakeholders and maintain accountability?</li><li><strong>Economic Sustainability:</strong> Can it be maintained long-term without excessive government spending?</li><li><strong>Integration:</strong> Do components reinforce each other synergistically?</li></ul><div class="alert alert-success mt-3"><strong><i class="fas fa-check-circle"></i> Why This Solution:</strong> The comprehensive framework scores highest across all criteria by integrating multiple stakeholder perspectives, creating self-sustaining economic models, and balancing global integration with local sovereignty.</div>'
    }
};

// Modal functions
function showModal(type) {
    const content = modalContent[type];
    document.getElementById('modalTitle').textContent = content.title;
    document.getElementById('modalBody').innerHTML = content.body;
    new bootstrap.Modal(document.getElementById('infoModal')).show();
}

function showVulnerability(num) {
    const vulnerabilities = {
        1: {
            title: 'Algorithmic Control of Information',
            body: '<h5>The Problem</h5><p>86.75 million Filipinos receive information filtered through foreign algorithms that prioritize engagement over accuracy.</p><h5>Evidence</h5><ul><li>12% of fact-checked articles contain AI-generated disinformation (Rappler, 2024)</li><li>Coordinated troll farms exploit engagement-based algorithms (Philippine News Agency, 2024)</li><li>Filter bubbles limit exposure to diverse perspectives</li></ul><h5>Impact</h5><p>Filipinos cannot control their information environment, undermining democratic engagement and critical discourse.</p>'
        },
        2: {
            title: 'Infrastructure Dependence',
            body: '<h5>The Problem</h5><p>95% of Filipino social media users rely on Facebook for essential communication, making it critical infrastructure under foreign control.</p><h5>Consequences</h5><ul><li>Meta policies, not Filipino democratic principles, govern communication</li><li>Platform policy changes affect millions without local oversight</li><li>Regional language content receives less algorithmic priority</li></ul><h5>Impact</h5><p>The fundamental infrastructure of Filipino social life exists outside Filipino jurisdiction.</p>'
        },
        3: {
            title: 'Discourse Manipulation',
            body: '<h5>The Problem</h5><p>Platform design prioritizes sensational content over substantive discourse through engagement-driven algorithms.</p><h5>Evidence</h5><ul><li>Fact-checkers cannot keep pace with troll armies (Context/TRF, 2025)</li><li>AI-generated disinformation evolves faster than detection systems (Cambridge Core, 2025)</li><li>Thoughtful content becomes invisible while sensationalism goes viral</li></ul><h5>Impact</h5><p>Platform business models systematically degrade the quality and character of public discourse.</p>'
        },
        4: {
            title: 'Economic Extraction',
            body: '<h5>The Problem</h5><p>Filipino data and attention enrich foreign corporations with minimal local regulation or benefit.</p><h5>Scale</h5><ul><li>87.64% of internet traffic is mobile, generating constant behavioral data (Meltwater, 2025)</li><li>70% of Filipinos make purchases based on influencer recommendations (Spiralytics, 2024)</li><li>Filipino creators depend entirely on foreign-owned platforms</li></ul><h5>Impact</h5><p>Data colonialism extracts value while leaving users vulnerable to manipulation without accountability.</p>'
        }
    };
    
    const content = vulnerabilities[num];
    document.getElementById('modalTitle').textContent = content.title;
    document.getElementById('modalBody').innerHTML = content.body;
    new bootstrap.Modal(document.getElementById('infoModal')).show();
}

function showSolution(num) {
    const solutions = {
        1: {
            title: 'Local Content Development',
            body: '<h5>Objective</h5><p>Empower Filipino creatives to produce competitive content that reflects local stories, languages, and perspectives.</p><h5>Implementation</h5><ul><li>National Content Development Fund financed by taxes on international streaming revenues</li><li>Grants and low-interest loans for local producers and filmmakers</li><li>Co-production incentives requiring Filipino creative control</li></ul><h5>Expected Results</h5><ul><li>Increased Filipino content production capacity</li><li>Local stories competing with global productions</li><li>Economic opportunities for Filipino creative industries</li></ul><h5>Success Indicators (SMART)</h5><ul><li><strong>Specific:</strong> Number of Filipino productions funded annually</li><li><strong>Measurable:</strong> Percentage increase in local content availability</li><li><strong>Attainable:</strong> Target 50+ projects in first year</li><li><strong>Relevant:</strong> Aligns with cultural sovereignty goals</li><li><strong>Time-based:</strong> 3-year pilot with quarterly reviews</li></ul>'
        },
        2: {
            title: 'Global Platform Regulation',
            body: '<h5>Objective</h5><p>Create fair competition and ensure international platforms contribute to Filipino cultural production.</p><h5>Implementation</h5><ul><li>Local content quotas requiring platforms to invest percentage of Philippine revenues in local productions</li><li>Foreign ownership limits and anti-monopoly provisions</li><li>Revenue taxation funding content development fund</li></ul><h5>Expected Results</h5><ul><li>Market space for locally-produced content</li><li>Fair competition between global and local players</li><li>Sustainable funding for Filipino creative industries</li></ul><h5>Success Indicators (SMART)</h5><ul><li><strong>Specific:</strong> 30% local content quota on platforms</li><li><strong>Measurable:</strong> PHP invested by platforms in Filipino productions</li><li><strong>Attainable:</strong> Phased implementation over 2 years</li><li><strong>Relevant:</strong> Ensures market access for Component 1 content</li><li><strong>Time-based:</strong> Full compliance within 24 months</li></ul>'
        },
        3: {
            title: 'Media Literacy Education',
            body: '<h5>Objective</h5><p>Empower Filipinos as informed consumers and confident creators in global media ecosystems.</p><h5>Implementation</h5><ul><li>Critical media literacy integrated into K-12 curriculum</li><li>Community-based education programs for adults</li><li>Digital literacy training emphasizing content creation</li><li>Public awareness campaigns on media manipulation</li></ul><h5>Expected Results</h5><ul><li>Citizens who critically analyze global media consumption</li><li>Informed demand for quality Filipino content</li><li>Next generation of skilled content creators</li><li>Resistance to disinformation and manipulation</li></ul><h5>Success Indicators (SMART)</h5><ul><li><strong>Specific:</strong> Media literacy modules in 100% of schools</li><li><strong>Measurable:</strong> Students completing literacy training annually</li><li><strong>Attainable:</strong> Leverage existing education infrastructure</li><li><strong>Relevant:</strong> Creates demand for Component 1 content</li><li><strong>Time-based:</strong> Full rollout in 3 years</li></ul>'
        },
        4: {
            title: 'Democratic Media Governance',
            body: '<h5>Objective</h5><p>Ensure accountability, transparency, and continuous adaptation across all framework components.</p><h5>Implementation</h5><ul><li>Multi-stakeholder governance council (government, industry, civil society, academia)</li><li>Public consultation processes for major policy decisions</li><li>Annual impact assessments on cultural diversity and democratic expression</li><li>Transparent reporting of fund allocation and platform compliance</li></ul><h5>Expected Results</h5><ul><li>Democratic legitimacy for cultural sovereignty policies</li><li>Prevention of regulatory capture or politicization</li><li>Evidence-based policy adaptation</li><li>Stakeholder buy-in and cooperation</li></ul><h5>Success Indicators (SMART)</h5><ul><li><strong>Specific:</strong> Quarterly governance council meetings</li><li><strong>Measurable:</strong> Stakeholder satisfaction surveys, policy adjustments made</li><li><strong>Attainable:</strong> Build on existing governance structures</li><li><strong>Relevant:</strong> Ensures all components remain effective</li><li><strong>Time-based:</strong> Continuous oversight with annual reviews</li></ul>'
        }
    };
    
    const content = solutions[num];
    document.getElementById('modalTitle').textContent = content.title;
    document.getElementById('modalBody').innerHTML = content.body;
    new bootstrap.Modal(document.getElementById('infoModal')).show();
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});