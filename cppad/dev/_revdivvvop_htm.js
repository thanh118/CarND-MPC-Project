var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad.htm',
'op.htm',
'revdivvvop.htm'
];
var list_down2 = [
'distribute.htm',
'newfeature.htm',
'define.htm',
'greaterthanzero.htm',
'greaterthanorzero.htm',
'lessthanzero.htm',
'lessthanorzero.htm',
'identicalpar.htm',
'identicalzero.htm',
'identicalone.htm',
'identicalequalpar.htm',
'opcode.htm',
'printop.htm',
'numind.htm',
'numvar.htm',
'tape_link.htm',
'taperec.htm',
'adtape.htm',
'boolfunlink.htm',
'op.htm',
'forwardsweep.htm',
'reversesweep.htm',
'forjacsweep.htm',
'revjacsweep.htm'
];
var list_down1 = [
'forabsop.htm',
'revabsop.htm',
'foraddop.htm',
'revaddop.htm',
'foracosop.htm',
'revacosop.htm',
'forasinop.htm',
'revasinop.htm',
'foratanop.htm',
'revatanop.htm',
'fordivvvop.htm',
'revdivvvop.htm',
'forexpop.htm',
'revexpop.htm',
'forlogop.htm',
'revlogop.htm',
'formulvvop.htm',
'revmulvvop.htm',
'forsincos.htm',
'revsincos.htm',
'forsqrtop.htm',
'revsqrtop.htm',
'forsubvvop.htm',
'revsubvvop.htm'
];
var list_current0 = [
'revdivvvop.htm#Syntax',
'revdivvvop.htm#Description',
'revdivvvop.htm#z',
'revdivvvop.htm#x',
'revdivvvop.htm#y',
'revdivvvop.htm#p',
'revdivvvop.htm#On Input',
'revdivvvop.htm#On Input.px',
'revdivvvop.htm#On Input.py',
'revdivvvop.htm#pz',
'revdivvvop.htm#On Output',
'revdivvvop.htm#On Output.px',
'revdivvvop.htm#On Output.py',
'revdivvvop.htm#On Output.pz'
];
function choose_across0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_across0[index-1];
}
function choose_up0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_up0[index-1];
}
function choose_down2(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down2[index-1];
}
function choose_down1(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down1[index-1];
}
function choose_down0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down0[index-1];
}
function choose_current0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_current0[index-1];
}
