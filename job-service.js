function JobService(){
    let jobService = this
    let jobs = []
    jobs.push(new Job('Hewlett-Packard', 'Firmware Engineer', "https://img.jakpost.net/c/2016/05/02/2016_05_02_3952_1462169335._large.jpg", 40, 50, 'Ready for your next thankless job? Look no further.'))

    function Job (company, jobTitle, hours, rate, description) {

        this.company = company
        this.jobTitle = jobTitle
        this.hours = hours
        this.rate = rate
        this.description = description  

    }

    this.getJobs = function(){
        let jobsCopy = []
        for (let i =0; i < jobs.length; i++){
            const job = jobs[i];
            let jobCopy = new Job(job.company, job.jobTitle, job.hours, job.rate, job.description)
            jobsCopy.push(jobCopy)
        }
        console.log(jobsCopy)
        return jobsCopy
    }

    this.loadJobs = function (cb) {
        $.get('https://bcw-gregslist.herokuapp.com/api/jobs').then(res => {
            jobs = res.data
            cb()
        })
    }
    
    this.makeJob = function (data, draw) {
        // jobs.push(new Job(data.company.value, data.jobTitle.value, data.imgUrl.value, data.hours.value, data.rate.value, data.description.value))
        // console.log(jobs)
        let newJob = new Job(
            data.company.value, 
            data.jobTitle.value, 
            data.hours.value, 
            data.rate.value, 
            data.description.value
        )
        $.post('https://bcw-gregslist.herokuapp.com/api/jobs', newJob).then(res =>{
            console.log(res)
            jobService.loadJobs(draw)
        })
    }
    
}