// Alpine.js custom components and store registration

document.addEventListener('alpine:init', () => {
    Alpine.store('counter', { value: 0 })
})

function counterComponent() {
    return {
        count: 0,
        increment() { this.count++ }
    }
}
