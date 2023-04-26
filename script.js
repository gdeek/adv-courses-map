$(document).ready(function() {
    $('img[usemap]').rwdImageMaps();

    // const start = 27800;
    // console.log(loadData().substring(start, start+10));
    
    const courses = JSON.parse(loadData());
    
    $("area").on("click", function(e) {
        e.preventDefault();

        var courseId = this.getAttribute('data-courseId');
        console.log(courseId);

        const course = courses[courseId];
        if (course) {
            $("#course-category").text(course.Category);
            $("#course-details").text(course.Code+" : "+course.Name);
            $("#course-summary").text(course.Summary);
            if(course.URL && course.URL.trim() !=="") {
                $("#course-url").attr('href', course.URL);
                $("#course-url").show();
            }
            else {
                $("#course-url").hide();
            }
            $("#modal").show();
        }
    });

    $(".close").on("click", function() {
        $("#modal").hide();
    });
});

function loadData() {
    console.log('json func called.');
    return `{
        "1": {
          "ID": "1",
          "Category": "Foundational",
          "Code": "ADV 150",
          "Name": "Introduction to Advertising",
          "Summary": "Introduction to the practice and profession of advertising. Course material covers various functional areas of advertising and integrated brand promotion, including account planning, creative, media\u2026 (more on Explorer) Taught by Steve Hall. Earn Gen Ed credit (social & beh sci; social sci). You might also like: ADV 175, 199, 310, 392, 400.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/150",
          "Coords": "2485, 3147, 2898, 2805"
        },
        "2": {
          "ID": "2",
          "Category": "Foundational",
          "Code": "ADV 175",
          "Name": "Diversity in Advertising",
          "Summary": "This course examines the multifaceted role diversity (including racial, gender, orientation, ability status) plays in the delivery and reception of advertising. Additionally, it examines the development of\u2026 (more on Explorer) Taught by Dr. Jason Chambers. Earn Gen Ed credit (cultural studies - US minority). You might also like: ADV 150, 199, 212, 290, 311.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/175",
          "Coords": "3140, 2875, 3563, 2503"
        },
        "3": {
          "ID": "3",
          "Category": "Foundational",
          "Code": "ADV 199",
          "Name": "The Communications Industry",
          "Summary": "This course covers various topics to help students learn more about the communication industry, with an emphasis on the organizations, people and practices that make things happen in advertising, PR, journalism and media... (more in Explorer) Restricted to freshmen in the Weston Exploration program. You may also like: ADV 150, 175, 270, 392, 409.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/199",
          "Coords": "2374, 2211, 2807, 2568"
        },
        "4": {
          "ID": "4",
          "Category": "Foundational",
          "Code": "ADV 200",
          "Name": "Data Literacy",
          "Summary": "",
          "URL": "https://courses.illinois.edu/schedule/2023/spring/ADV/200",
          "Coords": "3376, 2402, 2948, 2049"
        },
        "5": {
          "ID": "5",
          "Category": "Foundational",
          "Code": "ADV 212",
          "Name": "Advertising History",
          "Summary": "",
          "URL": "",
          "Coords": "3170, 3082, 3598, 3424"
        },
        "6": {
          "ID": "6",
          "Category": "Social",
          "Code": "ADV 201",
          "Name": "Social Media and Personal Branding",
          "Summary": "Creating a personal brand is vital to social media influencers, student athletes and online celebrities. This course focuses on practical strategies for building a strong personal brand on social media for career advancement and social influence... (more on Explorer) Taught by Dr. Sang-Hwa Oh. You may also like: ADV 150, 200, 290, 301, 305.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/201",
          "Coords": "3719, 2704, 4147, 3051"
        },
        "7": {
          "ID": "7",
          "Category": "Social",
          "Code": "ADV 290",
          "Name": "Social Media & Social Justice",
          "Summary": "An interactive course that introduces students to the complex dynamic between innovative social movements and social media technologies... (more on Explorer) Taught by Carrie Wilson-Brown and Susan Muirhead. Eligible for the PR minor. You may also like: ADV 175, 201, 301, 305, 491.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/290",
          "Coords": "3653, 2080, 4076, 2437"
        },
        "8": {
          "ID": "8",
          "Category": "Social",
          "Code": "ADV 301",
          "Name": "Becoming an Influencer",
          "Summary": "Explores the everyday impact the influencer economy has on our purchasing decisions, political engagement, and social activism. This new celebrity class illustrates the critical importance\u2026(more on Explorer) Taught by Carrie Wilson-Brown. Eligible for the PR minor. You may also like: ADV 175, 290, 301, 480, 491.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/301",
          "Coords": "4328, 2528, 4751, 2885"
        },
        "9": {
          "ID": "9",
          "Category": "Social",
          "Code": "ADV 491",
          "Name": "Digital Content and Social Media Management",
          "Summary": "Application of analytical planning concepts to advertising planning, decision making, and managing social media accounts. Covers all of the decision making areas of advertising and social media management... (more on Explorer) Taught by August Schiess. You may also like: ADV 201, 290 (Social Media & Social Justice), 301, 480, 490 (Digital Portfolio).",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/491",
          "Coords": "5048, 2503, 5466, 2845"
        },
        "10": {
          "ID": "10",
          "Category": "Social",
          "Code": "ADV 480",
          "Name": "Social Media Analytics",
          "Summary": "",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/480",
          "Coords": "4826, 1853, 5254, 2205"
        },
        "11": {
          "ID": "11",
          "Category": "Media",
          "Code": "ADV 392",
          "Name": "Advertising Immersion",
          "Summary": "Covers a variety of topics designed to help students learn more about, and be better prepared to enter, the advertising industry as professionals. Meets with ADV 490: Amazon Adv Experience this fall. (more on Explorer) You may also like: ADV 199, 290, 305, 409, 490.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/392",
          "Coords": "2737, 1541, 3160, 1898"
        },
        "12": {
          "ID": "12",
          "Category": "Media",
          "Code": "ADV 409",
          "Name": "Media Entrepreneurship",
          "Summary": "Introduces students to the foundations of entrepreneurship and evolving business models for media ventures. For the final project, students pitch a new business concept to a panel of industry professionals... (more on Explorer) Taught by Terry Kasdan. You may also like: ADV 270, 305, 392, 400, 495.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/409",
          "Coords": "2435, 1108, 2858, 1455"
        },
        "13": {
          "ID": "13",
          "Category": "Media",
          "Code": "ADV 483",
          "Name": "Audience Analytics",
          "Summary": "Required for Ad majors. In this course, students analyze audiences and matche consumer insights with strategic ideas for brand communication, contact, and connection... (more on Explorer) Taught by Dr. Kevin Wise. You may also like: ADV 200, 400 (NSAC Course), 409, 478, 495.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/483",
          "Coords": "2520, 358, 2938, 700"
        },
        "14": {
          "ID": "14",
          "Category": "Media",
          "Code": "ADV 490",
          "Name": "Topics in Media Literacy Education",
          "Summary": "Explores the opportunities and challenges involved in teaching media literacy. Topics vary by semester, e.g. developmentally appropriate strategies for teaching media literacy; techniques and tools for evaluating media; health and wellness... (more on Explorer) Taught by Dr. Stephanie Craft. You may also like: ADV 201, 409, 483, 495, 497.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/490",
          "Coords": "1986, 710, 2414, 1052"
        },
        "15": {
          "ID": "15",
          "Category": "Media",
          "Code": "ADV 495",
          "Name": "Internship Seminar",
          "Summary": "Digital portfolios offer a way to brand yourself and share your work and experience. In this hands-on class, create your own portfolio to showcase unique experiences and content from classes, extracurriculars, jobs... (more on Explorer) For ADV seniors only. Taught by Susan Muirhead. You may also like: ADV 290, 305, 201, 452, 490.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/495",
          "Coords": "1448, 937, 1871, 1289"
        },
        "16": {
          "ID": "16",
          "Category": "Digital",
          "Code": "ADV 305",
          "Name": "Advertising Technology and the Digital World",
          "Summary": "This course systematically examines the role of technology in shaping our lives\u2014and the role of the ad industry in shaping these technologies. Designed to prepare students to live and work in our increasingly digital world\u2026 (more on Explorer) Earn Gen Ed credit (social & beh sci, social sci). You may also like: 360, 361, 490, 200, 201.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/305",
          "Coords": "3401, 1501, 3824, 1858"
        },
        "17": {
          "ID": "17",
          "Category": "Digital",
          "Code": "ADV 360",
          "Name": "Innovations in Advertising",
          "Summary": "Required for Ad majors. (Formerly ADV 460) Intended to improve creative and critical thinking skill in advertising planning by understanding the core technology and perspective of digital and other innovative media\u2026 (more on Explorer) Taught by Dr. Chang Dae Ham. You may also like: ADV 200, 201, 305, 392, 490.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/360",
          "Coords": "4066, 1541, 4494, 1893"
        },
        "18": {
          "ID": "18",
          "Category": "Digital",
          "Code": "ADV 400",
          "Name": "Amazon Advertising Experience",
          "Summary": "In this action learning course, students will be working with an Amazon e-tailer to grow its business. Working in teams, students will gain hands-on experience in designing, planning, and executing advertising campaigns for an ecommerce enterprise... (more in Explorer) You may also like: ADV 200, 305, 392, 461, 490.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/400",
          "Coords": "3165, 1027, 3603, 1385"
        },
        "19": {
          "ID": "19",
          "Category": "Digital",
          "Code": "ADV 461",
          "Name": "Adv Strategies for Online Businesses",
          "Summary": "This class will cover an intersection of eCommerce advertising, technology, and business. Students learn to navigate the current eCommerce landscape. Guest speakers include industry experts at Walmart, Unilever, Amazon, Microsoft, Coca-Cola... (more on Explorer) Taught by Dr. Chang-Dae Ham. You may also like: ADV 305, 409, 461, 490 (Amazon Adv), 491.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/490",
          "Coords": "3175, 428, 3608, 786"
        },
        "20": {
          "ID": "20",
          "Category": "Digital",
          "Code": "ADV 490",
          "Name": "Adv Strategies for Online Businesses",
          "Summary": "This class will cover an intersection of eCommerce advertising, technology, and business. Students learn to navigate the current eCommerce landscape. Guest speakers include industry experts at Walmart, Unilever, Amazon, Microsoft, Coca-Cola... (more on Explorer) Taught by Dr. Chang-Dae Ham. You may also like: ADV 305, 409, 461, 490 (Amazon Adv), 491.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/490",
          "Coords": "3744, 619, 4172, 977"
        },
        "21": {
          "ID": "21",
          "Category": "Digital",
          "Code": "ADV 490",
          "Name": "Digital Portfolio",
          "Summary": "Digital portfolios offer a way to brand yourself and share your work and experience. In this hands-on class, create your own portfolio 'packaging' and showcasing your unique experiences and content you've created in classes, extra-curricular activities, jobs... (more on Explorer) For Ad seniors only. You may also like: ADV 201, 305, 400, 490, 491.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/490",
          "Coords": "4333, 851, 4756, 1198"
        },
        "22": {
          "ID": "22",
          "Category": "Digital",
          "Code": "ADV 492",
          "Name": "Tech and Advertising Campaigns",
          "Summary": "Required for CS+ADV majors. Gain hands-on experience in completing a technology-driven advertising campaign. Students will participate in engineering, advertising and project management activities with individual as well as team responsibilities... (more on Explorer) Taught by Dr. Ewa Maslowska. You may also like: ADV 461, 491, and all of the digital 490s.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/492",
          "Coords": "4685, 1274, 5118, 1636"
        },
        "23": {
          "ID": "23",
          "Category": "Creative",
          "Code": "ADV 290",
          "Name": "Adventures in Creative",
          "Summary": "Try this sampler of creative areas from a mix of faculty and professionals. In this hands-on project course, students will learn how to tell brand stories across multiple media. you\u2019ll practice making brand stories for print, social media, video, and podcasts... (more on Explorer) You may also like: ADV 150, 201, 290, 452, 490.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/290",
          "Coords": "3850, 3147, 4272, 3510"
        },
        "24": {
          "ID": "24",
          "Category": "Creative",
          "Code": "ADV 390",
          "Name": "Content Creation",
          "Summary": "Explores theories of creativity; situates creativity and creative practices within the social structure of organizations that develop creative content; examines the relationship between creative strategy\u2026 (more on Explorer) Required for Advertising majors. Taught by Peter Sheldon. You may also like: ADV 290, 452, 454, 400, 490.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/390",
          "Coords": "3693, 3595, 4121, 3953"
        },
        "25": {
          "ID": "25",
          "Category": "Creative",
          "Code": "ADV 452",
          "Name": "Creative Concepts I",
          "Summary": "Planning and execution of advertising across media, with emphasis on the creation of campaigns. Admission based on successful completion of special project... (more on Explorer) Sets up ADV 454. Taught by Peter Sheldon. You may also like: ADV 290 (Adventures in Creative), 311, 400 (Sandage Studios and NSAC Course), 490 (Copywriting).",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/452",
          "Coords": "4056, 4033, 4489, 4381"
        },
        "26": {
          "ID": "26",
          "Category": "Creative",
          "Code": "ADV 454",
          "Name": "Creative Concepts II",
          "Summary": "",
          "URL": "",
          "Coords": "4640, 4189, 5068, 4552"
        },
        "27": {
          "ID": "27",
          "Category": "Creative",
          "Code": "ADV 490",
          "Name": "Copywriting",
          "Summary": "",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/490",
          "Coords": "4449, 3187, 4882, 3540"
        },
        "28": {
          "ID": "28",
          "Category": "Campaigns",
          "Code": "ADV 311",
          "Name": "Classic Campaigns",
          "Summary": "",
          "URL": "",
          "Coords": "3099, 3575, 3537, 3948"
        },
        "29": {
          "ID": "29",
          "Category": "Campaigns",
          "Code": "ADV 400",
          "Name": "Sandage Studies",
          "Summary": "This hands-on course has students plan, develop and execute ad campaigns for real clients. Simulates an agency experience where students hone specialized skills in research, strategy, creative, media and/or leadership... (more on Explorer) Taught by Shachar Meron. You may also like: ADV 290, 392, 400, 409, 452.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/400",
          "Coords": "3275, 4129, 3714, 4492"
        },
        "30": {
          "ID": "30",
          "Category": "Campaigns",
          "Code": "ADV 400",
          "Name": "National Student Adv Competition",
          "Summary": "This course is affiliated with planning work for the AAF National Student Advertising Competition in Spring 2024. The fall semester is heavily focused on research and strategy for the competition... (more on Explorer) Instructor approval required. You may also like: ADV 400 (Sandage Studios), 290 (Adventures in Creative), 393, 396, 452.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/400",
          "Coords": "3512, 4542, 3950, 4909"
        },
        "31": {
          "ID": "31",
          "Category": "Campaigns",
          "Code": "ADV 498",
          "Name": "Sandage Project",
          "Summary": "Required capstone for Ad majors. In this course, students will integrate the concepts, experiences, and skills that have been learned in the curriculum with a service-learning project. This course is named after the founder of the Advertising Department... (more on Explorer) Taught by Marisa Peacock. You may also like: ADV 201, 400 (Sandage Studios or NSAC Course), ADV 452, 290 (Adventures in Creative).",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/498",
          "Coords": "3749, 4950, 4182, 5312"
        },
        "32": {
          "ID": "32",
          "Category": "Strategy",
          "Code": "ADV 250",
          "Name": "Advertising & Brand Strategy",
          "Summary": "Required for Ad majors.(Formerly ADV 283) This class is all about brands: what they are, how they operate, how they're shaped, launched, communicated. Focus on brand strategy and developing ad campaigns... (more on Explorer) Taught by Shachar Meron. You might also like: ADV 150, 311, 390, 393, 400.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/250",
          "Coords": "2571, 3283, 3019, 3625"
        },
        "33": {
          "ID": "33",
          "Category": "Strategy",
          "Code": "ADV 284",
          "Name": "Consumer Insights",
          "Summary": "Required for Ad majors. Course focuses on methods of eliciting consumer insight. In particular, this class introduces the process and applied outcomes of consumer insight in terms of building\u2026 (more on Explorer) Taught by W. Liu, U. Chung, V. Paltaratskaya. You might also like: ADV 311, 393, 396, 476, 478.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/284",
          "Coords": "2062, 3610, 2495, 3968"
        },
        "34": {
          "ID": "34",
          "Category": "Strategy",
          "Code": "ADV 290",
          "Name": "Cultural Intelligence",
          "Summary": "This course will focus on exploring, analyzing and thinking strategically about culture \u2013 with an emphasis on how it relates to brands, advertising and media. Students will be able to leverage their curiosity about the world... (more on Explorer) Taught by Steve Hall. You may also like: ADV 150, 199, 290, 392, 393.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/290",
          "Coords": "2601, 3797, 3019, 4154"
        },
        "35": {
          "ID": "35",
          "Category": "Strategy",
          "Code": "ADV 393",
          "Name": "Advertising and Society",
          "Summary": "Provides a critical understanding of advertising's role in modern society. Advertising will be studied as a cultural force and social institution... (more on Explorer) Eligible for Gen Ed credit (social & beh sci - social sci) and PR minor. You may also like: ADV 175, 290 (Cultural Intelligence), 305, 476, 478.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/393",
          "Coords": "2812, 4552, 3245, 4904"
        },
        "36": {
          "ID": "36",
          "Category": "Strategy",
          "Code": "ADV 476",
          "Name": "Global Advertising",
          "Summary": "",
          "URL": "",
          "Coords": "3024, 5045, 3457, 5403"
        },
        "37": {
          "ID": "37",
          "Category": "Strategy",
          "Code": "ADV 478",
          "Name": "Pyschology of Advertising",
          "Summary": "",
          "URL": "",
          "Coords": "2102, 4426, 2550, 4789"
        },
        "38": {
          "ID": "38",
          "Category": "Strategy",
          "Code": "ADV 497",
          "Name": "Colloquium in Advertising",
          "Summary": "Current advertising topics, cases, and research presented in a forum that fosters critical thinking and engagement. Weekly presentation and discussion of research and cases by faculty, undergrad/grad students, visiting scholars and visiting professionals... (more on Explorer) Taught by Dr. Chang-Dae Ham. You may also like: ADV 393, 396, 482, 484, 496.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/497",
          "Coords": "2304, 4975, 2737, 5332"
        },
        "39": {
          "ID": "39",
          "Category": "Research",
          "Code": "ADV 281",
          "Name": "Advertising Research Methods",
          "Summary": "Required for Ad majors. Introduces students to the wide spectrum of qualitative and quantitative research techniques that are commonly used in the advertising industry. In addition to examining the\u2026 (more on Explorer) Taught by Dr. Patrick Vargas. Available online in summer. You might also like: ADV 200, 290, 396, 484, 496.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/281",
          "Coords": "1951, 3072, 2389, 3439"
        },
        "40": {
          "ID": "40",
          "Category": "Research",
          "Code": "ADV 290",
          "Name": "Independent Study in Research",
          "Summary": "",
          "URL": "",
          "Coords": "1292, 3172, 1735, 3545"
        },
        "41": {
          "ID": "41",
          "Category": "Research",
          "Code": "ADV 396",
          "Name": "Research Experience in Advertising",
          "Summary": "Supervised participation in research and scholarly activities, usually as an assistant to an investigator... (more on Explorer) You may also like: ADV 290, 482, 484, 486, 490.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/396",
          "Coords": "1569, 4058, 2002, 4416"
        },
        "42": {
          "ID": "42",
          "Category": "Research",
          "Code": "ADV 482",
          "Name": "Qualitative Research Methods in Advertising",
          "Summary": "",
          "URL": "",
          "Coords": "743, 3686, 1176, 4053"
        },
        "43": {
          "ID": "43",
          "Category": "Research",
          "Code": "ADV 484",
          "Name": "Quantitative Research Methods in Advertising",
          "Summary": "",
          "URL": "",
          "Coords": "914, 4164, 1362, 4527"
        },
        "44": {
          "ID": "44",
          "Category": "Research",
          "Code": "ADV 490",
          "Name": "Customer Experience & Business Consulting",
          "Summary": "As an experiential learning class, this course covers advanced techniques of consumer experience research with an emphasis on planning real-world client projects. Build professional research portfolios. (more on Explorer) Taught by Dr. Chang-Dae Ham. You may also like: ADV 396, 490, 482, 484, 496.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/490",
          "Coords": "561, 3177, 1000, 3535"
        },
        "45": {
          "ID": "45",
          "Category": "Research",
          "Code": "ADV 496",
          "Name": "Undergrad Research Project",
          "Summary": "",
          "URL": "",
          "Coords": "1463, 4617, 1901, 4965"
        },
        "46": {
          "ID": "46",
          "Category": "Public Relations",
          "Code": "ADV 310",
          "Name": "Introduction to Public Relations",
          "Summary": "Introduces the student to the practice and profession of public relations. Course material covers topics such as the history of public relations, the role of\u2026 (more on Explorer) First of four courses in the PR minor. Taught by Dr. Jacqueline Hitchon. You may also like: ADV 199, 201, 301, 314, 350.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/310",
          "Coords": "1790, 2482, 2223, 2835"
        },
        "47": {
          "ID": "47",
          "Category": "Public Relations",
          "Code": "ADV 314",
          "Name": "Sports Public Relations",
          "Summary": "Sports public relations is designed to show the management function of developing and sustaining two-way lines of communication, understanding, acceptance, and cooperation between a sports organization\u2026 (more on Explorer) Second of four courses in PR minor. Taught by Steve Raquel. You may also like: ADV 199, 301, 350, 409, 410.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/314",
          "Coords": "1287, 2558, 1715, 2915"
        },
        "48": {
          "ID": "48",
          "Category": "Public Relations",
          "Code": "ADV 350",
          "Name": "Writing for Public Relations",
          "Summary": "Focuses on the strategy of crafting and delivering PR messages to various audiences with special emphasis on pre-writing, preparation, revision and presentation... (more on Explorer) Third of four courses in PR minor. Taught by Dr. Jacqueline Hitchon. You may also like: ADV 410, 199, 201, 301, 490.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/350",
          "Coords": "758, 2623, 1201, 2991"
        },
        "49": {
          "ID": "49",
          "Category": "Public Relations",
          "Code": "ADV 410",
          "Name": "Public Relations Strategies",
          "Summary": "Examines the intersection of PR strategies and communication tactics used by organizations to meet reputation and relationship management objectives with relevant publics and stakeholders\u2026 (more on Explorer) The fourth of four courses in the PR minor. You may also like: ADV 290, 301, 393, 409, 491.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/410",
          "Coords": "229, 2689, 677, 3051"
        },
        "50": {
          "ID": "50",
          "Category": "Sales",
          "Code": "ADV 270",
          "Name": "Principles of Sales",
          "Summary": "This course focuses on the development of the sales process and the role of sales and sales people within organizations. It will also consider consultative\u2026 (more on Explorer) Taught by Dionne Clifton. First of four courses in Sales certificate. You might also like: ADV 320, 150, 201, 310, 409.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/270",
          "Coords": "2047, 1798, 2480, 2165"
        },
        "51": {
          "ID": "51",
          "Category": "Sales",
          "Code": "ADV 320",
          "Name": "Sales Management",
          "Summary": "This course addresses conceptual and methodological issues related to the management of sales within organizations. Responsibilities, function and skills necessary to be an effective sales\u2026 (more on Explorer) Second of four courses for Sales certificate. Taught by Dionne Clifton. You may also like: ADV 290, 301, 370, 392, 409.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/320",
          "Coords": "1558, 1682, 1986, 2049"
        },
        "52": {
          "ID": "52",
          "Category": "Sales",
          "Code": "ADV 370",
          "Name": "Sales and the Consumer",
          "Summary": "This course focuses on different topics related to consumer behavior management, and the consumer's relationships to the sales process. It will include case studies and\u2026 (more on Explorer) Third of four courses for Sales Certificate. Taught by Dionne Clifton. You may also like: ADV 495, 401, 290, 490, 201.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/370",
          "Coords": "1050, 1536, 1498, 1898"
        },
        "53": {
          "ID": "53",
          "Category": "Sales",
          "Code": "ADV 495",
          "Name": "Media Sales Capstone",
          "Summary": "Reserved for students in the Media Sales Certificate program. Please contact the instructor, Dionne Clifton, for more information on registering for this course. Note: students should contact Professor Clifton AFTER a sales internship has been secured... (more on Explorer) You may also like: ADV 370, 409, 490 (Cust. Experience and Bus. Consluting), 495.",
          "URL": "https://courses.illinois.edu/schedule/2023/fall/ADV/495",
          "Coords": "561, 1395, 1000, 1762"
        }
    }`;
}

function findLineAndCharPos(string, index) {
    const lines = string.split('\n');
    let lineNum = 0;
    let charCount = 0;
  
    for (let i = 0; i < lines.length; i++) {
      charCount += lines[i].length + 1;
      if (charCount > index) {
        lineNum = i + 1;
        break;
      }
    }
  
    const charPos = index - (charCount - lines[lineNum - 1].length) - (lineNum - 1);
    return { line: lineNum, char: charPos };
  }
