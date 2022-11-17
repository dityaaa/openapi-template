import 'rapidoc';
import spec from './specs.json'

document.addEventListener('DOMContentLoaded', () => {
    const docEl = document.getElementById('thedoc')

    docEl.loadSpec(spec)
})
