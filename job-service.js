function JobService(){
    let jobs = []
    jobs.push(new Job('Hewlett-Packard', 'Firmware Engineer', "https://img.jakpost.net/c/2016/05/02/2016_05_02_3952_1462169335._large.jpg", 40, 50, 'Ready for your next thankless job? Look no further.'))

    function Job (company, jobTitle, imgURL, hours, rate, description) {

        this.company = company
        this.jobTitle = jobTitle
        this.imgURL = imgURL
        this.hours = hours
        this.rate = rate
        this.description = description  

    }

    this.getJobs = function(){
        let jobsCopy = []
        for (let i =0; i < jobs.length; i++){
            const job = jobs[i];
            let jobCopy = new Job(job.company, job.jobTitle, job.imgURL, job.hours, job.rate, job.description)
            jobsCopy.push(jobCopy)
        }
        console.log(jobsCopy)
        return jobsCopy
    }

    this.makeJob = function (data) {
        jobs.push(new Job(data.company.value, data.jobTitle.value, data.imgURL.value, data.hours.value, data.rate.value, data.description.value))
        console.log(jobs)
    }
    
}