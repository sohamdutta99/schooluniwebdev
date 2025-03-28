

document.addEventListener("DOMContentLoaded", function () {
    let a = document.querySelector(".stportal");
    let b = document.querySelector(".tportal");
    let c = document.querySelector(".aportal");

    let h1 = document.querySelector(".box1 .h1");
    let h2 = document.querySelector(".box2 .h2");
    let h3 = document.querySelector(".box3 .h3");

    let p1 = document.querySelector(".box1 .p1");
    let p2 = document.querySelector(".box2 .p2");
    let p3 = document.querySelector(".box3 .p3");

    let link1 = document.querySelector(".link1")
    let link2 = document.querySelector(".link2")
    let link3 = document.querySelector(".link3")

    function reset(x, y) {
        x.style.color = "#ffffff"
        y.style.color = "#ffffff"
        x.style.backgroundColor = ""
        y.style.backgroundColor = ""
    }
    function reset(x) {
        x.style.color = "#ffffff"
        x.style.backgroundColor = ""
    }

    a.addEventListener("click", function () {
        h1.innerHTML = `<h2>Course Management</h2>`;
        p1.innerHTML = `<h4>Access Grades, Assignments and Course Materials!</h4>`;
        link1.innerHTML = `<a href="link1">Access Now!</a>`

        h2.innerHTML = `<h2>Attendance Tracker</h2>`;
        p2.innerHTML = `<h4>Review Your Attendance!</h4>`;
        link2.innerHTML = `<a href="link1">Check Attendance!</a>`

        h3.innerHTML = `<h2>Fee Management</h2>`;
        p3.innerHTML = `<h4>View and Pay tuition and other academic fees!</h4>`;
        link3.innerHTML = `<a href="link1">Make Payment!</a>`

        a.style.backgroundColor = "green"
        a.style.color = "white"
        reset(b, c)

    });

    b.addEventListener("click", function () {
        h1.innerHTML = `<h2>Class Management</h2>`;
        p1.innerHTML = `<h4>Manage Student information and more</h4>`;
        link1.innerHTML = `<a href="link1">Manage Classes!</a>`

        h2.innerHTML = `<h2>Grade Submission</h2>`;
        p2.innerHTML = `<h4>Upload Grades and provide feedback to students!</h4>`;
        link2.innerHTML = `<a href="link1">Submit Grades</a>`

        h3.innerHTML = `<h2>Schedule Planner</h2>`;
        p3.innerHTML = `<h4>View and manage teaching schedules!</h4>`;
        link3.innerHTML = `<a href="link1">PLan Schedule!</a>`

        b.style.backgroundColor = "green"
        b.style.color = "white"
        reset(a, c)
    });

    c.addEventListener("click", function () {
        h1.innerHTML = `<h2>Institution Management</h2>`;
        p1.innerHTML = `<h4>Manage school policies, departments, and programs</h4>`;
        link1.innerHTML = `<a href="link1">Manage Institution!</a>`

        h2.innerHTML = `<h2>Staff Management</h2>`;
        p2.innerHTML = `<h4>Manage faculty and staff information and assignments</h4>`;
        link2.innerHTML = `<a href="link1">Manage Staff!</a>`

        h3.innerHTML = `<h2>Announcement System</h2>`;
        p3.innerHTML = `<h4>Create and publish circulars, notices, and updates</h4>`;
        link3.innerHTML = `<a href="link1">Post Announcement!</a>`

        reset(a, b)
        c.style.backgroundColor = "green"
        c.style.color = "white"

    });
});

document.addEventListener("DOMContentLoaded", function () {
    function startCounting(id, max, step, delay) {
        let counter = document.getElementById(id);
        let i = 0;
        function typeEffect() {
            if (i <= max) {
                counter.innerHTML = `<b>${i}</b>`;
                i += step;
                setTimeout(typeEffect, delay);
            }
        }
        typeEffect();
    }

    function observeElement(id, max, step, delay) {
        let target = document.getElementById(id);
        let observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startCounting(id, max, step, delay);
                        observer.unobserve(target);
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(target);
    }

    observeElement("stunum", 15000, 1000, 100);
    observeElement("facnum", 850, 50, 100);
    observeElement("pronum", 120, 20, 120);
    observeElement("renum", 450, 25, 120);
});


function Attendancepage() {
    document.querySelector(".body").style.display = "none";
    document.querySelector(".body2").style.display = "none";
    document.querySelector(".upcomingevents").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".campuslife").style.display = "none";
    let grade = document.querySelector(".grade");
    grade.style.display = "none";

    let daupload = document.querySelector(".daupload");
    daupload.style.display = "none";
    let att = document.querySelector(".att");
    att.style.display = "flex";

    let time = document.querySelector(".timetable");
    time.style.display = "none";

    document.getElementById("aboutnav").style.display = "none"
    document.getElementById("campusnav").style.display = "none"
}

function calculateAttendance() {
    let subname = document.getElementById("subname").value;
    let tot = document.getElementById("tot").value;
    let go = document.getElementById("go").value;
    let output = document.querySelector(".output")




    if (subname.trim() === "" || tot === "" || go === "") {
        output.innerHTML = `<h3>Please fill in all the fields.</h3>`;
    }
    else {
        tot = parseInt(tot);
        go = parseInt(go);
        let perc = (go / tot) * 100;

        if (perc > 75) {
            output.innerHTML = `<h3>Congratulations, you are eligible for writing your exams</h3>`
        }
        else {
            output.innerHTML = `<h3>You can not write your ${subname} exam.</h3>`
        }
    }
}

function Home() {
    document.querySelector(".body").style.display = "flex";
    document.querySelector(".body2").style.display = "flex";
    document.querySelector(".upcomingevents").style.display = "flex";
    document.querySelector(".about").style.display = "flex";
    document.querySelector(".campuslife").style.display = "flex";
    let att = document.querySelector(".att");
    att.style.display = "none";
    let grade = document.querySelector(".grade");
    grade.style.display = "none";
    let daupload = document.querySelector(".daupload");
    daupload.style.display = "none";

    let time = document.querySelector(".timetable");
    time.style.display = "none";

    document.getElementById("aboutnav").style.display = ""
    document.getElementById("campusnav").style.display = ""
}


function calculateGrade() {
    let subname1 = document.getElementById("subname1").value;
    let totalg = document.getElementById("totalg").value;
    let output1 = document.querySelector(".output1")




    if (subname1.trim() === "" || totalg === "") {
        output1.innerHTML = `<h3>Please fill in all the fields.</h3>`;
    }
    else {
        totalg = parseInt(totalg);

        if (totalg < 50) {
            output1.innerHTML = `<h3>Better luck next time. You have failed the ${subname1}.</h3>`
        }
        else if (totalg >= 50 && totalg < 60) {
            output1.innerHTML = `<h3>Congratulations! You have earned a D grade in ${subname1}.</h3>`
        }
        else if (totalg >= 60 && totalg < 70) {
            output1.innerHTML = `<h3>Congratulations! You have earned a C grade in ${subname1}.</h3>`
        }
        else if (totalg >= 70 && totalg < 80) {
            output1.innerHTML = `<h3>Congratulations! You have earned a B grade in ${subname1}.</h3>`
        }
        else if (totalg >= 80 && totalg < 90) {
            output1.innerHTML = `<h3>Congratulations! You have earned a A grade in ${subname1}.</h3>`
        }
        else if (totalg >= 90 && totalg < 100) {
            output1.innerHTML = `<h3>Congratulations! You have earned a S grade in ${subname1}.</h3>`
        }
    }
}

function GradePage() {
    document.querySelector(".body").style.display = "none";
    document.querySelector(".body2").style.display = "none";
    document.querySelector(".upcomingevents").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".campuslife").style.display = "none";
    let att = document.querySelector(".att");
    att.style.display = "none";
    let grade = document.querySelector(".grade");
    grade.style.display = "flex";
    let daupload = document.querySelector(".daupload");
    daupload.style.display = "none";
    let time = document.querySelector(".timetable");
    time.style.display = "none";

    document.getElementById("aboutnav").style.display = "none"
    document.getElementById("campusnav").style.display = "none"
}


let p = document.querySelector(".spportal");
let q = document.querySelector(".feportal");
let r = document.querySelector(".grportal");

function reset(x, y) {
    x.style.backgroundColor = ""
    y.style.backgroundColor = ""
}
p.addEventListener("click", function () {

    document.querySelector(".sports").innerHTML = `<p style="font-size: 18px; line-height: 1.6;">
                        Rimberio University takes pride in its vibrant sports culture, offering a wide range of athletic
                        programs and recreational activities for students of all skill levels. Our state-of-the-art
                        sports facilities include modern stadiums, fitness centers, swimming pools, and dedicated courts
                        for basketball, tennis, and volleyball. Students can participate in competitive varsity teams,
                        intramural leagues, and fitness clubs, fostering teamwork, discipline, and a healthy lifestyle.
                         Whether it's soccer, track and field, martial arts, or yoga, Rimberio University provides
                        opportunities for everyone to stay active, develop their athletic skills, and build lifelong
                        friendships through sports.
                    </p>`
    document.querySelector(".spimage").innerHTML = `<img src="images/sports.png" alt="sports" width="100%" height="100%">`;
    document.getElementById("h").innerHTML = `<h1>Sports and Activities!</h1>`
    reset(q, r)
    p.style.transition = "background-color 0.5s ease-in-out"
    p.style.backgroundColor = "green"
    p.style.color = "white"

})

q.addEventListener("click", function () {
    document.querySelector(".sports").innerHTML = `<p style="font-size: 18px; line-height: 1.6;">Rimberio University is known for its vibrant and dynamic fests that bring together 
    students, faculty, and visitors in a celebration of talent, culture, and creativity. Throughout the year, the university hosts a 
    variety of festivals, including cultural extravaganzas, technical symposiums, music concerts, and literary events. These fests 
    provide a platform for students to showcase their skills, compete in exciting competitions, and engage in thought-provoking 
    discussions. From energetic dance performances and live band shows to hackathons and debate championships, Rimberio University’s 
    fests foster innovation, collaboration, and a strong sense of community, making them some of the most anticipated events on campus.</p>`
    document.querySelector(".spimage").innerHTML = `<img src="images/concert.png" alt="sports" width="100%" height="100%">`
    document.getElementById("h").innerHTML = `<h1>Cultural and technology fests!</h1>`
    reset(p, r)
    q.style.transition = "background-color 0.5s ease-in-out"
    q.style.backgroundColor = "green"
    q.style.color = "white"
})

r.addEventListener("click", function () {
    document.querySelector(".sports").innerHTML = `<p style="font-size: 18px; line-height: 1.6;">Rimberio University is committed to 
    sustainability and environmental responsibility, fostering a vibrant green campus that harmonizes nature with modern education.
     Our lush landscapes, eco-friendly infrastructure, and renewable energy initiatives create a serene and sustainable learning 
     environment. With tree-lined pathways, botanical gardens, and dedicated green spaces, students can enjoy a refreshing connection
      to nature. The university promotes sustainable practices such as rainwater harvesting, solar energy utilization, and waste 
      recycling to minimize its ecological footprint. Through various student-led environmental clubs and awareness programs, 
      Rimberio University instills a deep sense of responsibility towards the planet, making it a model institution for 
      eco-conscious education and innovation.</p>`
    document.querySelector(".spimage").innerHTML = `<img src="images/green.png" alt="sports" width="100%" height="100%">`
    document.getElementById("h").innerHTML = `<h1>Green Campus!</h1>`
    reset(p, q)
    r.style.transition = "background-color 0.5s ease-in-out"
    r.style.backgroundColor = "green"
    r.style.color = "white"
})

function dapage() {
    document.querySelector(".body").style.display = "none";
    document.querySelector(".body2").style.display = "none";
    document.querySelector(".upcomingevents").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".campuslife").style.display = "none";
    let att = document.querySelector(".att");
    att.style.display = "none";
    let grade = document.querySelector(".grade");
    grade.style.display = "none";
    let daupload = document.querySelector(".daupload");
    daupload.style.display = "flex";
    let time = document.querySelector(".timetable");
    time.style.display = "none";

    document.getElementById("aboutnav").style.display = "none"
    document.getElementById("campusnav").style.display = "none"
}


function uploadda() {
    let subname2 = document.getElementById("subname2").value.trim();
    let sem = document.getElementById("sem").value.trim();
    let fac = document.getElementById("fac").value.trim();
    let pdf = document.getElementById("pdf");
    let output2 = document.querySelector(".output2");

    if (subname2 === "" || sem === "" || fac === "" || pdf.files.length === 0) {
        output2.innerHTML = `<h3>Please fill in all the fields.</h3>`;
    } else {
        output2.innerHTML = `<h3>You have submitted your assignment.</h3>`;
    }
}


let s = document.querySelector(".rportal");
let t = document.querySelector(".pportal");
let u = document.querySelector(".iportal");

s.addEventListener("click", function () {
    document.querySelector(".impressheading").innerHTML = `<h2>RANKING AND RECOGNITION</h2>`
    document.querySelector(".impresso").style.display = "block";
    document.querySelector(".childdiv").innerHTML = `<p></p>`
    document.getElementById("1st").innerHTML = `7th BEST INSTITUTION AROUND THE WORLD!`
    document.getElementById("2nd").innerHTML = `A++ Grade by NAARC AND MHRD`
    document.getElementById("3rd").innerHTML = `12th Rank in the world in Engineering & Technology by QS Subject Rankings`
    document.getElementById("4th").innerHTML = `15th Rank in data science and Artificial intelligence!`
    document.getElementById("5th").innerHTML = `Rimberio is one among the top 2 in the world and within 501-600 universities of the world as per Shanghai ARWU (Academic Ranking of World Universities) 2024`
    document.getElementById("6th").innerHTML = ``
    document.getElementById("7th").innerHTML = ``
    document.getElementById("6th").style.listStyleType = "none"
    document.getElementById("7th").style.listStyleType = "none"

    s.style.transition = "background-color 0.5s ease-in-out"
    s.style.backgroundColor = "green"
    s.style.color = "white"
    reset(t, u)
});

t.addEventListener("click", function () {
    document.querySelector(".impressheading").innerHTML = `<h2>PLACEMENTS</h2>`
    document.querySelector(".childdiv").innerHTML = `<p></p>`
    document.querySelector(".impresso").style.display = "block";
    document.getElementById("1st").innerHTML = `2862 Dream Offers, 2807 Super Dream Offers`
    document.getElementById("2nd").innerHTML = `6380 Regular Offers`
    document.getElementById("3rd").innerHTML = `530 Marquee Offers`
    document.getElementById("4th").innerHTML = `4051 Industry Internships`
    document.getElementById("5th").innerHTML = `International Record By Google: 400 Offers`
    document.getElementById("6th").innerHTML = `200 startup offers`
    document.getElementById("7th").innerHTML = `150 Research Fellowships`
    document.getElementById("6th").style.listStyleType = "disc"
    document.getElementById("7th").style.listStyleType = "disc"

    t.style.transition = "background-color 0.5s ease-in-out"
    t.style.backgroundColor = "green"
    t.style.color = "white"
    reset(s, u)
});

u.addEventListener("click", function () {
    document.querySelector(".impressheading").innerHTML = `<h2>INTERNATIONAL RELATIONS</h2>`
    document.querySelector(".impresso").style.display = "none";
    document.querySelector(".childdiv").innerHTML = `
        <p style="font-size: 20px;">
            Rimberio has strong international presence across the world and 
            partnerships with over 500 foreign universities. Rimberio provides a platform for students and faculty to connect with 
            international experts and collaborate on projects involving cutting-edge technologies. Rimberio provides options to 
            study part of their academic program in Rimberio and continue the remaining tenure in a partner foreign university.
        </p>`;

    u.style.transition = "background-color 0.5s ease-in-out"
    u.style.backgroundColor = "green"
    u.style.color = "white"
    reset(s, t)
});


function timetablepage() {
    let time = document.querySelector(".timetable");
    time.style.display = "flex";
    document.querySelector(".body").style.display = "none";
    document.querySelector(".body2").style.display = "none";
    document.querySelector(".upcomingevents").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".campuslife").style.display = "none";
    let att = document.querySelector(".att");
    att.style.display = "none";
    let grade = document.querySelector(".grade");
    grade.style.display = "none";
    let daupload = document.querySelector(".daupload");
    daupload.style.display = "none";

    document.getElementById("aboutnav").style.display = "none"
    document.getElementById("campusnav").style.display = "none"
}

let m = document.getElementById("winter")
let n = document.getElementById("summer")

let faculty1 = ["Parthasarthy G", "Adaline Suji", "Revathi CK", "Vishnu Priya", "Geradine Mary", "Juhi Baroi", "Sudheer CV"]
let cgroup1 = ["A1", "B1", "C1", "D1", "E1", "F1", "G1"]
let course1 = ["webdev", "DAA", "CAO", "TOC", "MPMC", "Probability", "Quantitative skills"]
let category1 = ["core", "core", "elective", "linked science", "core", "elective", "open elective"]
let copt1 = ["mandatory", "mandatory"]
let slot1 = ["room 201", "room 102", "room 304", "room 501", "room719", "room 555", "room 346"]
let cid1 = ["cs101", "bs102", "ts303", "fs404", "gs505", "ms606", "ms707"]

let faculty2 = ["Sathiya kumar", "Adaline Suji", "Lavanya N", "Sunitha V", "Padigepati Naveen", "Niranjan Hari", "Sudheer CV"]
let cgroup2 = ["A1", "B1", "C1", "D1", "E1", "F1", "G1"]
let course2 = ["JAVA", "DSA", "DSD", "Techincal report writing", "Complex variables", "Discrete Maths", "Quantitative skills"]
let category2 = ["core", "core", "elective", "linked science", "core", "elective", "open elective"]
let copt2 = ["mandatory", "mandatory"]
let slot2 = ["room 201", "room 102", "room 304", "room 501", "room719", "room 555", "room 346"]
let cid2 = ["cs101", "bs102", "ts303", "fs404", "gs505", "ms606", "ms707"]

m.addEventListener("click", function () {

    document.getElementById("tabhead").innerHTML = `<h2>Winter Semester</h2>`
    let tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    for (let i = 0; i < faculty1.length; i++) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = i + 1;
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.textContent = cgroup1[i];
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent = course1[i];
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.textContent = category1[i];
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.textContent = copt1[i % copt1.length];
        tr.appendChild(td5);

        let td6 = document.createElement("td");
        td6.textContent = cid1[i];
        tr.appendChild(td6);

        let td7 = document.createElement("td");
        td7.textContent = slot1[i];
        tr.appendChild(td7);

        let td8 = document.createElement("td");
        td8.textContent = faculty1[i];
        tr.appendChild(td8);

        tableBody.appendChild(tr);
    }
});

n.addEventListener("click", function () {

    document.getElementById("tabhead").innerHTML = `<h2>Summer Semester</h2>`
    let tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    for (let i = 0; i < faculty1.length; i++) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = i + 1;
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.textContent = cgroup2[i];
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent = course2[i];
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.textContent = category2[i];
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.textContent = copt2[i % copt2.length];
        tr.appendChild(td5);

        let td6 = document.createElement("td");
        td6.textContent = cid2[i];
        tr.appendChild(td6);

        let td7 = document.createElement("td");
        td7.textContent = slot2[i];
        tr.appendChild(td7);

        let td8 = document.createElement("td");
        td8.textContent = faculty2[i];
        tr.appendChild(td8);

        tableBody.appendChild(tr);
    }

}); 
