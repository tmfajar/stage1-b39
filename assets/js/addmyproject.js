let blogs = [] // Variable Global

function addBlog() {
    event.preventDefault()
    // Get data form
    let title = document.getElementById('input-blog-title').value
    let startDate = document.getElementById('sDate').value
    let endDate = document.getElementById('eDate').value
    let description = document.getElementById('input-blog-description').value
    let image = document.getElementById('input-blog-image').files

    console.log(new Date(startDate));
    console.log(endDate);

    let nodejs = document.getElementById('nodejs').checked
    let reactjs = document.getElementById('reactjs').checked
    let nextjs = document.getElementById('nextjs').checked
    let typescript = document.getElementById('ts').checked
    
    if(nodejs){
        nodejs = document.getElementById('nodejs').value
    } else {
        nodejs = ''
    }
    if(reactjs){
        reactjs = document.getElementById('reactjs').value
    } else {
        reactjs = ''
    }
    if(nextjs){
        nodejs = document.getElementById('nextjs').value
    } else {
        nextjs = ''
    }
    if(typescript){
        typescript = document.getElementById('ts').value
    } else {
        typescript = ''
    }

    console.log(nodejs);
    console.log(reactjs);
    console.log(nextjs);
    console.log(typescript);
    
    image = URL.createObjectURL(image)

    // Validation value
    // ....

    // Grouping by Object
    let blog = {
        title: title,
        content: content,
        image: image,
        author: 'T.M.Fajar Pramudya',
        postAt: new Date(),
        nodejs,
        reactjs,
        nextjs,
        typescript
    }

    // Store to Array
    addBlog.push(blog)

    renderBlog()
}

function renderBlog() {

    document.getElementById('contents').innerHTML = ''

    console.log(addBlog);


    for (let i = 0; i < addBlog.length; i++) {

        document.getElementById('contents').innerHTML += ` 
        <div class="blog-list-item">
            <div class="blog-image">
            <img src="${addBlog[i].image}" alt="" />
            </div>
            <div class="blog-content">
            <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
            </div>
            <h1>
                <a href="addmyprojectdetail.html" target="_blank"
                >${addBlog[i].title}</a
                >
            </h1>
            <div class="detail-blog-content">
            ${getFullTime(addBlog[i].postAt)} | ${addBlog[i].author}
            </div>
            <p>${addBlog[i].content}</p>

            
            <div style="text-align: right; color: grey; font-size: 15px">
                ${getDistanceTime(addBlog[i].postAt)}
            </div>
            </div>
        </div>`
    }
}

// 1. Convert Format Time ✅
// 2. Count Duration


function getFullTime(time) {

    let month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    // tanggal => getDate()
    // bulan => getMonth()
    // tahun => getFullYear()
    // jam => getHours()
    // menit => getMinutes()

    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()
    let hour = time.getHours()
    let minute = time.getMinutes()

    let result = `${date} ${month[monthIndex]} ${year} ${hour}:${minute} WIB`

    // console.log(time);
    // console.log(result);

    return result;
}

// 1. Hari = milisecondInSecond * secondsInMinute * minuteInHour * hoursInDay
// 2. jam = milisecondInSecond * secondsInMinute * minuteInHour
// 3. menit = milisecondInSecond * secondsInMinute
// 4. detik = milisecondInSecond

function getDistanceTime(time) {
    let blogPostAt = new Date(time); // Waktu Blog di post
    let currentTime = new Date() // Waktu saat ini

    let distance = currentTime - blogPostAt; // milisecond

    // Convert to Day
    let dayDistance = Math.floor(distance / (1000 * 60 * 60 * 24))

    if(dayDistance > 0) {
        return `${dayDistance} day ago`;
    } else {
        // Convert to Hour
        let hourDistance = Math.floor(distance / (1000 * 60 * 60))

        if(hourDistance > 0) {
            return `${hourDistance} hours ago`;
        } else {
            // Convert to Minute
            let minuteDistance = Math.floor(distance / (1000 * 60))

            if (minuteDistance > 0) {
                return `${minuteDistance} minute ago`;
            } else {
                // Convert to Second
                let secondDistance = Math.floor(distance / (1000))

                return `${secondDistance} second ago`;
            }
        }

    }
}

// Eksekusi code selama interval (second,minute,etc) yang ditentukan
// #1

setInterval(function() {
    renderBlog()
}, 1000)

// #2
// setInterval(intervalFunction, 1000)

// function intervalFunction() {
//     renderBlog()
// }
