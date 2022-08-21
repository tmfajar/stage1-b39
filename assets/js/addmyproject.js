let Blogs = [] // Variable Global
    // let a = 'test'
    // console.log(a);
function addBlog() {


    
    // Get data form
    let title = document.getElementById('input-blog-title').value;
    let startDate = document.getElementById('sDate').value;
    let endDate = document.getElementById('eDate').value;
    let description = document.getElementById('input-blog-description').value;
    let image = document.getElementById('input-blog-image').files[0];

    //if (title == '') {
      //  return alert('harap mengisi title');
    //} else if (startDate == ''){
    //    return alert('harap mengisi waktu');
    //} else if (endDate == ''){
    //    return alert('');
    //} else if (description == ''){
    //    return alert('harap mengisi description');
    //} else if (image == ''){
    //    return alert('harap mengupload gambar');
    //}

    //const a = document.createElement('a');

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
        startDate: startDate,
        endDate: endDate,
        description: description,
        image: image,
        author: 'T.M.Fajar Pramudya',
        postAt: new Date(),
        nodejs,
        reactjs,
        nextjs,
        typescript
    }


    // Store to Array

    Blogs.push(blog)

    renderBlog()
}

function renderBlog() {
    console.log(Blogs)
    document.getElementById('contents').innerHTML = ''

    Blogs.reverse().map((blog) =>  {
        console.log(blog)
        return document.getElementById('contents').innerHTML += `   
            <div class="blog-list-item">
                <div class="blog-image">
                    <img src="${blog.image}" alt="" />
                </div>
                <div class="blog-content">
                <h1>
                <a href="addmyprojectdetail.html" target="_blank">${blog.title}</a>
                </h1>
                <div class="detail-blog-content">
                ${getFullTime(blog.postAt)} | ${blog.author}
                </div>
                <p>${blog.description}</p>
                
                <div>
                ${
                            blog.reactjs ? 'reactjs' : ''
                        }
                        ${
                            blog.typescript ? 'typescript' : ''
                        }
                        ${
                            blog.nodejs ? 'nodejs' : ''
                        }
                        ${
                            blog.nextjs ? 'next' : ''
                        }
                        </div>
                        <div style="text-align: right; color: grey; font-size: 15px">
                        <span style="font-size: 12px; color:grey">${getDistanceTime(blog.postAt)}</span>
                        </div>
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
            </div>
            </div>`
    })
       


    // for (let i = 0; i < Blogs.length; i++) {

    //     document.getElementById('contents').innerHTML += ` 
    //     <div class="blog-list-item">
    //         <div class="blog-image">
    //             <img src="${Blogs[i].image}" alt="" />
    //         </div>
    //         <div class="blog-content">
    //             <div class="btn-group">
    //                 <button class="btn-edit">Edit Post</button>
    //                 <button class="btn-post">Post Blog</button>
    //             </div>
    //             <h1>
    //             <a href="addmyprojectdetail.html" target="_blank">${Blogs[i].title}</a>
    //             </h1>
    //             <div class="detail-blog-content">
    //                 ${getFullTime(Blogs[i].postAt)} | ${Blogs[i].author}
    //             </div>
    //                 <p>${Blogs[i].content}</p>

                
    //             <div style="text-align: right; color: grey; font-size: 15px">
    //                 <span style="font-size: 12px; color:grey">${getDistanceTime(Blogs[i].postAt)}</span>
    //             </div>
    //         </div>
    //     </div>`
    // }
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
    let hours = time.getHours()
    let minutes = time.getMinutes()

    if(hours < 10){
        hours = "0" + hours
    }else if(minutes < 10){
        minutes = "0" + minutes
    }
    
    // 12 Agustus 2022 09.04
    let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
    // console.log(fullTime);
    return fullTime;

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

    let distance = blogPostAt - currentTime; // milisecond
    console.log(distance);

    // Convert to Day
    let dayDistance = Math.floor(distance / (1000 * 60 * 60 * 24))
    let distanceHours = Math.floor(distance / (1000 * 60 * 60))
    let distanceMinutes = Math.floor(distance / (1000 * 60))
    let distanceSeconds = Math.floor(distance / (1000))

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

// setInterval(function() {
//     renderBlog()
// }, 1000)

// #2
// setInterval(intervalFunction, 1000)

// function intervalFunction() {
//     renderBlog()
// }
