var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'adtape.xml'
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
'adtape.xml#Syntax',
'adtape.xml#Description',
'adtape.xml#Rec',
'adtape.xml#Rec.Empty OpCode',
'adtape.xml#Rec.Printing OpCode',
'adtape.xml#Rec.Parameter',
'adtape.xml#Rec.Independent',
'adtape.xml#Rec.Loading Vector Element',
'adtape.xml#Rec.Storing Vector Element',
'adtape.xml#Rec.Op(Variable, Variable)',
'adtape.xml#Rec.Op(Variable, Parameter)',
'adtape.xml#Rec.Op(Parameter, Variable)',
'adtape.xml#Rec.Op(Parameter, Parameter)',
'adtape.xml#Rec.Op(Variable)',
'adtape.xml#Rec.User Defined Functions',
'adtape.xml#Rec.Variable Indexed Arrays'
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
