const faqs = document.querySelectorAll(".faq")

faqs.forEach(faqEvent => {
    const questionEvent = faqEvent.querySelector('.question')
    questionEvent.addEventListener("toggle", () => {
        if (faqEvent.open === flase) {
            faqEvent.open = true
        } else {
            faqEvent.open = false
        }
        console.log(faqEl.open)
    })
})