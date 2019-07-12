//Hyduke-Software.net 2019
//This version only works on reed.co.uk

var searchterms = ["subject to successful completion of the training course", "costs","fees"] //curated search terms

var searchResult = document.querySelectorAll('[id^="jobSection"]'); //the class starts jobsection######

for (var i = 0; i < searchResult.length; i++) { console.log( searchResult[i].textContent)

for (var j = 0; j < searchterms.length; j++){
				var pos = searchResult[i].textContent.search(searchterms[j])
					if (pos > -1){
				//searchResult[i].style.backgroundColor = "red";  //future version option will allow to warn/suggest the job adverts appear suspicious
				searchResult[i].remove(); //removes the html element found to contain the search term
					}

											}
;}


/*THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
/*