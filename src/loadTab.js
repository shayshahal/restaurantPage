// Tab loading function that will be dynamically imported
export default async function loadTab(tabNum)
{
    // Create tab div
    const tabDiv = document.createElement('div');

    // Call for the correct tab loading JS file 
    const {default: tab} = await import('./tab' + tabNum);

    // Load the tab into the created div
    tab(tabDiv);

    return tabDiv;
}