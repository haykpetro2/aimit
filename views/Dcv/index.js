import { pageClass } from '../../constants/constants';
import { Controller } from './Controller';
import { View } from './View';
import MainLayout from '../../components/MainLayout';

export default MainLayout(Controller(View, pageClass.Dcv));
