var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'_index.xml'
];
var list_down1 = [
'distribute.xml',
'newfeature.xml',
'define.xml',
'greaterthanzero.xml',
'greaterthanorzero.xml',
'lessthanzero.xml',
'lessthanorzero.xml',
'identicalpar.xml',
'identicalzero.xml',
'identicalone.xml',
'identicalequalpar.xml',
'opcode.xml',
'printop.xml',
'numind.xml',
'numvar.xml',
'tape_link.xml',
'taperec.xml',
'adtape.xml',
'boolfunlink.xml',
'op.xml',
'forwardsweep.xml',
'reversesweep.xml',
'forjacsweep.xml',
'revjacsweep.xml'
];
var list_current0 = [
'_index.xml#A',
'_index.xml#B',
'_index.xml#C',
'_index.xml#D',
'_index.xml#E',
'_index.xml#F',
'_index.xml#G',
'_index.xml#I',
'_index.xml#L',
'_index.xml#M',
'_index.xml#N',
'_index.xml#O',
'_index.xml#P',
'_index.xml#R',
'_index.xml#S',
'_index.xml#T',
'_index.xml#U',
'_index.xml#Z'
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
