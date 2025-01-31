
const subcategories = {
    1: { 
                "Blog post Writing": "I'm writing a blog post on [topic] aimed at [type of audience] and need a compelling introduction to hook my readers and clarify what they’ll read about in the article. Act as an experienced content writer specializing in the [field] field. Write a 100-word introduction that incorporates the following keywords naturally: [keywords]. The introduction should follow BLUF (Bottom Line Up Front) and PAS (Problem-Agitation-Solution) principles to immediately capture reader interest and highlight the value of the post. Here's an example of the type of introduction I'm looking for: (Insert example).", 
                "Editing Help:": "I'm working on an article and     need help improving a specific paragraph for clarity and readability. Act as a professional editor with expertise in clear, concise writing. Please rewrite the following paragraph, focusing on simplifying complex sentences, eliminating redundancy, improving logical flow, and enhancing overall readability. Maintain the original meaning and key points while making the content more accessible to a general audience. Here's the paragraph that needs improvement: (Insert the paragraph here).",
                "Email Newsletters:": " I'm creating an email marketing campaign to engage our subscribers and establish our expertise on [topic]. Act as an email marketing specialist with knowledge in [topic]. Write a series of five email newsletters, each providing valuable tips and tricks for [topic]. Each email should be around 300 words, have a catchy subject line, and include a clear call-to-action. Ensure the content is engaging, practical, and tailored to our audience of [describe target audience].",
                "Discussion Partner:": "I'm writing a blog post on [topic] and want to boost reader engagement. Generate [number] discussion questions that encourage readers to share their experiences and opinions. Present the questions in a numbered list format. Example question: (Insert example).",
                "Exotic Podcast Script: ": "Write a script for a podcast episode discussing the benefits of [topic].",
                "Summarize interviews:": " I'm creating a blog post based on an expert interview and need the key points extracted. Summarize the main insights, unique perspectives, and actionable takeaways from this expert interview in [number] words or less. Here's the interview transcript: (Paste interview/Link)."
        
        
            },
            2: { 
                "Animation Ideas": "I’m enhancing the user experience of our web application. Act as a senior front-end developer specializing in web animations. Provide [number] creative ideas for implementing animation effects in our web application. For each idea, specify the use case (e.g., loading screens, transitions between pages, interactive elements), the recommended technology (e.g., CSS animations, JavaScript libraries like GSAP or Three.js), and a brief description of the animation effect. Consider performance implications and accessibility. Here's an example of a well-described animation idea: (Insert example). Ensure ideas range from simple CSS transitions to more complex JavaScript-based animations. ", 
                "For software testing": "Our large-scale software project needs a comprehensive testing strategy. We're aiming to minimize bugs in production, ensure smooth integration between components, and maintain high user satisfaction. Act as a QA lead with experience in enterprise-level testing processes. Develop a flowchart for a software testing process that addresses these goals. The flowchart should (insert criteria). Here's an example of how to represent a testing stage in the flowchart: (Insert example of a flowchart segment with explanation)." ,
                "Roadmaps Just For You": "You are an experienced software project manager. Provide a step-by-step guide for creating a development roadmap for a new web application, including key milestones and deliverables." ,
                "The OG Ideas for SOLID Principles": "I’m improving the codebase architecture at our [specific business] company. Act as a senior software engineer specializing in clean code practices. Give me [number] practical ideas for incorporating SOLID principles in our object-oriented design, focusing on our [specific type of application]. For each idea, provide a brief code snippet or class structure example. Here’s an example of what I’m looking for: (Insert example)." ,
                "User Authentication solution": "Pretend you’re a cybersecurity expert specializing in web application authentication and suggest [number] ways to handle user authentication in a web application for improved security." ,
                "Machine Learning Cases": "Describe [number] potential use cases for implementing machine learning algorithms in a data analysis application." ,
                "Coding Challenge:": "I want you to act as a brainstorming assistant and suggest [number] ideas for a coding challenge that will test the problem-solving skills of junior developers." ,
            },
            3: { 
                "Model training": "I'm developing a machine learning model for [specific task/problem]. Act as a machine learning engineer specializing in [relevant field]. Help me train a [model name] by providing Python code to tune the hyperparameters and predict [parameters]. Include comments explaining each step of the process. Use libraries like [examples]. Consider techniques such as [technique types] for hyperparameter tuning. Here's an example of how to structure a section of the code with explanatory comments: (Insert example code).", 
                "Data visualization": "I'm starting an exploratory data analysis on a [subject] dataset. Act as a data scientist with expertise in data visualization. Write Python code for [subject] data visualization and exploration, including scatter plots, histograms, and correlation matrices. Use libraries like [examples]. For each visualization, include a brief comment explaining its purpose and what insights it might reveal. Consider including additional visualizations like box plots or heatmaps if relevant to [subject]. Provide code to handle potential issues like missing data or outliers. Here's an example of a well-commented visualization code: (Insert example code snippet)." ,
                "Synthetic data": "I need to generate synthetic data for testing our [specific application]. Act as a data engineer specializing in synthetic data generation. Create a dataset with [number] rows and [number] columns, including “age,” “gender,” “income,” and “purchase history.” Ensure the data is realistic and follows expected distributions for each variable. Provide the dataset in CSV format. Here's an example of how to structure the code for generating one column: (Insert example code snippet)." ,
                "Machine learning model": "Act as a data scientist and build a machine learning model for me. I have a dataset of customer churn data. Please create a model that predicts customer churn using features such as [metrics]. (Paste data set)." ,
                "Python code": " Act as an automatic machine learning (AutoML) bot using TPOT. I’m working on a model that predicts credit card fraud. Provide Python code to identify the optimal classification model, aiming for the highest AUC score on the test dataset." ,
                "Predictive model": "Please build a machine-learning model that predicts [subject] based on historical data. Use the past year as the training period and the most recent month as the validation period." ,
                "Customer churn prediction model": " I want you to act as a data scientist and perform feature engineering for a customer churn prediction model. The dataset contains customer [metrics]. Please write Python code to generate new features that could improve the model’s performance." ,
                "NLP model": "Can you help me implement a natural language processing (NLP) model? I have a dataset of customer reviews, and I want to classify them into positive and negative sentiment categories. Please provide the code for text preprocessing, feature extraction, and model training." ,
                "Dataset generation: ": "I need a dataset for sentiment analysis with [number] rows and [number] columns: “text” and “label” (positive/negative). Please generate the dataset in CSV format." 
            },
            
            4: { 
                "Activity development": "I'm a [grade] teacher designing a [length] project for my [number]-grade [subject] class to address [issue]. Act as a project-based learning specialist in [educational level] education. Develop an activity that integrates [subject], [skill], and [additional component], culminating in [final product/presentation]. Include daily outlines, assessment rubrics, and differentiation strategies. Example lesson plan: (Insert example).", 
                "Study guide": ": I'm preparing my students for their upcoming [subject] exam. Act as a [subject] curriculum expert specializing in exam preparation. Help me create a [length]-long study guide that comprehensively covers all [topics/concepts/formulas] for [subject]. The study guide should include concise explanations, key terms, sample problems with solutions, and memory aids or mnemonic devices where applicable. Organize the content in a logical sequence that builds on foundational knowledge. Include a section on common misconceptions or frequently misunderstood concepts. Here's an example of how to structure one section of the study guide: (Insert example)." ,
                "Science experiment": ": I'm planning a memorable science lesson for my [level] students. Design a 45-minute hands-on science experiment that demonstrates the principles of [scientific concept] for [level] students. The experiment should use readily available materials, be safe for classroom use, and include clear step-by-step instructions. Provide pre-experiment discussion questions, a materials list, safety precautions, and post-experiment reflection prompts. Include modifications for different learning abilities and extensions for advanced students. Here's an example of how to present one part of the experiment: (Insert example)" ,
                "Active learning strategies": "I'm struggling to engage all students in my lecture hall of [number] undergraduates. As an expert in active learning pedagogies for higher education, suggest [number] strategies for promoting active learning in this large classroom setting. Consider approaches that leverage technology, peer interaction, and varied assessment methods among others. An effective strategy should encourage critical thinking, increase student participation, and be scalable for large groups." ,
                "Tech integration": "Suggest ways to integrate technology into a [education level] [topic] curriculum. Include examples of digital tools and platforms that enhance learning and engagement." ,
                "Targeted tutorial": "Provide a step-by-step tutorial on how to solve [equation] using the [formula]." ,
                "Rubric development": "I'm teaching a college-level public speaking course and need to evaluate student presentations fairly. Act as an experienced public speaking instructor with a background in [background]. Develop a comprehensive rubric for assessing oral presentations, including criteria for [types of criteria]. Include clear descriptors for each performance level. Example criterion: (Insert example)." ,
                "Mind map": "Create a mind map that illustrates the interconnectedness of various historical events during [a specific period]." ,
                "Parental involvement ideas": "Design a plan to increase parental involvement in a [education level] school setting. Include methods for regular communication, volunteer opportunities, and parent-teacher collaboration." ,
                "Flashcards": "I'm developing study materials for my [level] [foreign language] class. Create a set of [number] flashcards to help students memorize essential vocabulary words. For each flashcard, include the word in [foreign language], its [language] translation, a sample sentence, and a mnemonic device or cultural note to aid retention. Example flashcard format: (Insert example)." ,
                "Motivation techniques": "Develop techniques for motivating [education level] students who are disengaged or struggling. Include both intrinsic and extrinsic motivators and how to apply them." ,
                "Professional development plan": "Create a professional development plan for teachers to improve classroom technology integration. Include goals, resources, and a timeline for implementation." ,
                "Lesson planning": "Develop a comprehensive lesson plan on [topic] for [education level] students. The lesson plan should cover key areas such as [specific topics]. Include clear learning objectives, engaging activities, instructional strategies, and assessment methods." ,
                "Collaborative learning activities": ": Suggest collaborative learning activities for a [education level] [topic] class. Explain how these activities foster teamwork, communication, and a deeper understanding of the material." ,
                "Classroom management plan": "Develop a classroom management plan for an [education level] teacher. Include techniques for maintaining a positive learning environment, addressing disruptive behaviour, and fostering student engagement." ,
                "Online course modules": "Design an interactive online course module on the topic of [specific topic]. Incorporate a variety of multimedia elements including instructional videos, interactive quizzes, and hands-on lessons to engage learners. Ensure the module includes clear learning objectives, user-friendly navigation, and opportunities for real-time feedback." ,
                "General rubric": "Create a detailed rubric for assessing student presentations in a [education level] [topics] class. Include criteria for content accuracy, presentation skills, and engagement." ,
                "Diverse classroom management strategies": "Give me [number] ideas for managing a diverse classroom with students of varying academic abilities and behavioural needs. Include specific examples and techniques" ,
            },
            5: { 
                "•	Ad campaign strategy": "•	I'm developing a launch strategy for a new product in the [niche] market and need a comprehensive advertising campaign. Act as an experienced advertising strategist specializing in product launches. Develop a multi-channel campaign strategy that covers digital, social, and traditional media. Include target audience analysis, key messaging, budget allocation across channels, and a timeline for the campaign rollout. Here's our product and audience information: [supplemental information]. Your strategy should outline at least 5 specific tactics, each with a clear objective and success metric. Consider current trends in [niche] advertising and how to differentiate our product. Here's an example of a well-structured advertising campaign strategy: (Insert example).", 
                "Viral Marketing Plans": "I'm planning a viral marketing campaign to generate buzz for our brand on [social media platform]. Act as a social media marketing expert specializing in viral campaigns. Propose [number] creative ideas for a campaign that will engage users and encourage sharing. Each idea should include a concept description, potential hashtags, and an explanation of why it could go viral. Consider current trends on [social media platform], user behavior, and shareable content formats. At least [number] ideas should incorporate user-generated content. Here's an example of the type of viral campaign idea I'm looking for: (Insert example of a well-conceived viral campaign idea with its rationale).", 
                "Ad Campaign Assets": "an advertising campaign about [product/service] targeting [target audience]. Include [number] messages and slogans and choose the best promotional media channels based on our product offering. (Paste supplemental information).", 
                "YouTube ad script ideas": "Act as a YouTube Ads expert and give me 5 ideas for a YouTube ad script that grabs viewers’ attention within the first [number] seconds and drives them to take action. (Paste supplemental information).", 
                "Billboard ad ideas": "Give me [number] ideas for a billboard ad campaign promoting our [offering]. The campaign should be visually striking, memorable, and instantly convey the brand's message of [message]. Target audience: [audience]. (Paste supplemental information).", 
                "Ad headline variations": "Craft 3 different headline variations for our [offering]. Each headline should target a different pain point faced by our target audience. Describe the target audience and the software's core benefits. (Paste supplemental information about your product, audience, and their pain points).", 
                "Buyer persona: ": "Develop a buyer persona, including pain points and desires, for a [interest] enthusiast who enjoys attending [event type]." 
                
            }
    // Other categories...
};

const dropdown = document.getElementById('subcategories');
const subSubcategoryDropdown = document.getElementById('subSubcategoryDropdown');
const subSubcategories = document.getElementById('subSubcategories');
const contentBox = document.getElementById('contentBox');
const contentText = document.getElementById('contentText');
const editor = document.getElementById('editor');
const copyButton = document.getElementById('copyButton');

// Populate sub-subcategories when subcategory is selected
dropdown.addEventListener('change', () => {
    const selectedValue = dropdown.value;
    if (subcategories[selectedValue]) {
        subSubcategories.innerHTML = '<option value="" disabled selected>Select...</option>';
        for (const key in subcategories[selectedValue]) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = key;
            subSubcategories.appendChild(option);
        }
        subSubcategoryDropdown.style.display = 'block';
    } else {
        subSubcategoryDropdown.style.display = 'none';
        contentBox.style.display = 'none';
    }
});

// Display content when sub-subcategory is selected
subSubcategories.addEventListener('change', () => {
    const subcategoryValue = dropdown.value;
    const subSubcategoryValue = subSubcategories.value;
    if (subcategories[subcategoryValue] && subcategories[subcategoryValue][subSubcategoryValue]) {
        contentText.textContent = subcategories[subcategoryValue][subSubcategoryValue];
        contentBox.style.display = 'block';
    } else {
        contentBox.style.display = 'none';
    }
});

// Handle click event on the link to populate the textbox
document.getElementById('editLink').addEventListener('click', function(event) {
    event.preventDefault();
    const subcategoryValue = dropdown.value;
    const subSubcategoryValue = subSubcategories.value;
    if (subcategories[subcategoryValue] && subcategories[subcategoryValue][subSubcategoryValue]) {
        editor.value = subcategories[subcategoryValue][subSubcategoryValue];
        editor.style.display = 'block';
        copyButton.style.display = 'block';
    }
});

// Copy content to clipboard
copyButton.addEventListener('click', function() {
    const editorContent = editor.value;
    navigator.clipboard.writeText(editorContent)
        .then(() => alert('Content copied to clipboard!'))
        .catch(err => console.error('Failed to copy text: ', err));
    document.addEventListener('click', () => {
    contentBox.style.display = 'none';});
    });

